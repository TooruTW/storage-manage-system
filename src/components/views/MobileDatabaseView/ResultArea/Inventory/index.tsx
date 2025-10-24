import { useEffect, useState } from "react";
import { InventoryType } from "@/types/InventoryType";
import { useGetInventoryApi } from "@/api/supabase/inventoryApi/useGetInventoryApi";
import { TableStateView } from "@/components/views/DatabaseView/shared";

const Inventory = ({ product }: { product: string }) => {
  const [data, setData] = useState<InventoryType[]>([]);
  const { data: inventoryData, isLoading } = useGetInventoryApi();

  useEffect(() => {
    if (!inventoryData || isLoading) return;
    if (product !== "") {
      const filteredData = inventoryData.filter((item) =>
        item.product_name.includes(product)
      );
      setData(filteredData);
    } else {
      setData(inventoryData);
    }
  }, [product, inventoryData, isLoading]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  return (
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item) => {
          return (
            <li key={item.product_name} className="w-full flex flex-col">
              <div className="w-full flex gap-4 rounded-md  bg-primary/10 p-2">
                <div className="flex flex-col w-1/3">
                  <div>{item.product_name}</div>
                  <div className="text-label text-primary/50">
                    單位：<span>{item.unit}</span>
                  </div>
                </div>
                <div className="flex justify-between flex-1">
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">數量:</span>
                    <span className="self-end">{item.quantity}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">成本:</span>
                    <span className="self-end">
                      $ {item.last_cost_per_unit}
                    </span>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-label">{item.last_inbound_date}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        },
        [data]
      )}
    </ul>
  );
};

export default Inventory;
