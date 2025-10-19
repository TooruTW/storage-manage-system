import { useEffect, useState } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CreateOutbound } from "../../../type";
import { Inventory } from "@/api/supabase/inventoryApi/useGetInventoryApi";
import { useGetInventoryApi } from "@/api/supabase/inventoryApi/useGetInventoryApi";
import { useGetOutboundApi } from "@/api/supabase/outboundAPi/useGetOutboundApi";

type ResultsProps = {
  currentTab: "all" | "purchaseHistory";
  keyword: string;
  setValue: UseFormSetValue<CreateOutbound>;
  watch: UseFormWatch<CreateOutbound>;
  onSubmit: () => void;
};

const Results = ({
  currentTab,
  keyword,
  setValue,
  watch,
  onSubmit,
}: ResultsProps) => {
  const [results, setResults] = useState<Inventory[]>([]);
  const { data: inventoryData } = useGetInventoryApi();
  const { data: outboundData } = useGetOutboundApi();

  // 現在可以取得當前的 customer name
  const customerName = watch("customer_name");

  // filter
  useEffect(() => {
    if (!inventoryData || !outboundData) return;
    let filteredInventory: Inventory[] = inventoryData;
    // filter by tab
    if (currentTab !== "all") {
      const purchaseHistory = outboundData?.filter(
        (outbound) => outbound.name === customerName
      );
      const purchaseHistoryProducts = inventoryData.filter((inventory) =>
        purchaseHistory?.some(
          (outbound) => outbound.product_name === inventory.product_name
        )
      );
      filteredInventory = purchaseHistoryProducts;
    }
    if (keyword !== "") {
      filteredInventory = filteredInventory.filter((inventory) =>
        inventory.product_name.includes(keyword)
      );
    }
    setResults(filteredInventory);
  }, [keyword, currentTab, inventoryData, outboundData, customerName]);

  const handleClickItem = (item: Inventory) => {
    // 填入商品名稱、單位和成本單價
    setValue("product_name", item.product_name);
    setValue("unit", item.unit);
    setValue("cost_per_unit", item.last_cost_per_unit);
    // 自動提交表單
    onSubmit();
  };

  return (
    <ul className="flex flex-col overflow-y-auto border-1 border-primary/10 rounded-md h-160 divide-y-1 divide-primary/10">
      {results.map((result) => (
        <li
          key={result.product_name}
          className="text-paragraph text-center py-2 hover:bg-primary/10 cursor-pointer"
          onClick={() => handleClickItem(result)}
        >
          {result.product_name}
          <span className="text-label text-primary/50 ml-2">
            ({result.unit})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Results;
