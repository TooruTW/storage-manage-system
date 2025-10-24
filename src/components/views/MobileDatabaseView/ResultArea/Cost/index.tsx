import { useEffect, useState, useMemo } from "react";
import { useGetInboundApi } from "@/api/supabase/inboundAPi/useGetInboundApi";
import { TableStateView } from "@/components/views/DatabaseView/shared";
import ConditionRequired from "../shared/ConditionRequired";

import { InboundType } from "@/types/InboundType";


const Cost = ({ object, product }: { object: string; product: string }) => {
  const [data, setData] = useState<InboundType[]>([]);
  const { data: inboundData, isLoading } = useGetInboundApi();
  const isFiltering = useMemo(() => {
    return object !== "" || product !== "";
  }, [object, product]);

  useEffect(() => {
    if (!inboundData || isLoading) return;
    if (!isFiltering) return;

    if (object !== "") {
      const filteredData = inboundData.filter((item) =>
        item.supplier_name.includes(object)
      );
      setData(filteredData);
    }
    if (product !== "") {
      const filteredData = inboundData.filter((item) =>
        item.product_name.includes(product)
      );
      setData(filteredData);
    }
  }, [object, product, inboundData, isLoading, isFiltering]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  if (!isFiltering) {
    return <ConditionRequired />;
  }
  return (
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item) => {
          return (
            <li key={item.product_name} className="w-full flex flex-col">
              <div className="w-fit text-balance rounded-t-md bg-primary text-primary-foreground px-2">
                <p>{item.supplier_name}</p>
              </div>
              <div className="w-full flex gap-4 rounded-b-md rounded-tr-md bg-primary/10 p-2">
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
                    <span className="self-end">$ {item.price_per_unit}</span>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-label">{item.inbound_date}</p>
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

export default Cost;
