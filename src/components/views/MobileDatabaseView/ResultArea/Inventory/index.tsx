import { useEffect, useState } from "react";

import { TableStateView } from "@/components/views/DatabaseView/shared";

import VirtualList from "../shared/VirtualList";

import { useGetInventoryApi } from "@/api/supabase/inventoryApi/useGetInventoryApi";

import { InventoryType } from "@/types/InventoryType";

const Inventory = ({ product }: { product: string }) => {
  const [data, setData] = useState<InventoryType[]>([]);
  const { data: inventoryData, isLoading } = useGetInventoryApi();

  useEffect(() => {
    if (!inventoryData || isLoading) return;
    let tempData = [...inventoryData];
    if (product !== "") {
      tempData = tempData.filter((item) => item.product_name.includes(product));
    }
    setData(tempData);
  }, [product, inventoryData, isLoading]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  return (
    <VirtualList
      data={data}
      getItemKey={(item, index) => `${item.id}-${index}-${item.product_name}`}
      renderItem={(item) => {
        const {
          product_name,
          unit,
          quantity,
          last_cost_per_unit,
          last_inbound_date,
        } = item;

        return (
          <div className="w-full flex flex-col my-2">
            <div className="w-full flex gap-4 rounded-md bg-primary/10 p-2">
              <div className="flex flex-col w-30">
                <div className="text-balance">{product_name}</div>
                <div className="text-label text-primary/50">
                  單位：<span>{unit}</span>
                </div>
              </div>

              <div className=" grid grid-cols-3 flex-1">
                <div className="flex flex-col justify-center">
                  <span className="text-label text-primary/50">數量:</span>
                  <span className="self-end">{quantity}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-label text-primary/50">成本:</span>
                  <span className="self-end">$ {last_cost_per_unit}</span>
                </div>
                <div className="flex flex-col justify-center items-end text-label">
                  <p>{last_inbound_date.split("-")[0]}</p>
                  <p>
                    {last_inbound_date.split("-")[1]} /{" "}
                    {last_inbound_date.split("-")[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Inventory;
