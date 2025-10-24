import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../../type";
import { useGetInventoryApi } from "@/api/supabase/inventoryApi/useGetInventoryApi";
import { InventoryType } from "@/types/InventoryType";

type ResultsProps = {
  keyword: string;
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
};

const Results = ({ keyword, setValue, onSubmit }: ResultsProps) => {
  const { data: inventoryData } = useGetInventoryApi();
  const [results, setResults] = useState<InventoryType[]>([]);

  // init inventory list
  useEffect(() => {
    if (inventoryData) {
      setResults(inventoryData);
    }
  }, [inventoryData]);

  useEffect(() => {
    if (!inventoryData) return;
    if (keyword === "") {
      setResults(inventoryData);
    } else {
      setResults(
        inventoryData.filter((result) => result.product_name.includes(keyword))
      );
    }
  }, [keyword, inventoryData]);

  const handleClickItem = (item: InventoryType) => {
    // 填入商品 ID、名稱、單位和成本單價
    setValue("product_id", item.id);
    setValue("product_name", item.product_name);
    setValue("unit", item.unit);
    setValue("price_per_unit", item.last_cost_per_unit);
    // 自動提交表單
    onSubmit();
  };

  return (
    <ul className="flex flex-col overflow-y-auto border-1 border-primary/10 rounded-md h-150 divide-y-1 divide-primary/10">
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
