import { useEffect, useState, useMemo } from "react";
import { useGetInboundApi } from "@/api/supabase/inboundAPi/useGetInboundApi";
import { TableStateView } from "@/components/views/DatabaseView/shared";
import ConditionRequired from "../shared/ConditionRequired";
import VirtualList from "../shared/VirtualList";

import { InboundType } from "@/types/InboundType";

const Cost = ({ object, product }: { object: string; product: string }) => {
  const [data, setData] = useState<InboundType[]>([]);
  const { data: inboundData, isLoading } = useGetInboundApi();
  const isFiltering = useMemo(() => {
    return object !== "" || product !== "";
  }, [object, product]);

  useEffect(() => {
    if (!inboundData || isLoading) return;
    let tempData = [...inboundData];
    if (object !== "") {
      tempData = tempData.filter((item) => item.supplier_name.includes(object));
    }
    if (product !== "") {
      tempData = tempData.filter((item) => item.product_name.includes(product));
    }
    setData(tempData);
  }, [object, product, inboundData, isLoading, isFiltering]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  if (!isFiltering) {
    return <ConditionRequired />;
  }

  return (
    <VirtualList
      data={data}
      getItemKey={(item, index) => `${item.id}-${index}-${item.inbound_date}`}
      renderItem={(item) => {
        const {
          inbound_date,
          supplier_name,
          product_name,
          unit,
          quantity,
          price_per_unit,
        } = item;
        return (
          <div className="w-full flex flex-col mb-2">
            <div className="w-fit text-balance rounded-t-md bg-primary text-primary-foreground px-2">
              <p>{supplier_name}</p>
            </div>
            <div className="w-full flex gap-4 rounded-b-md rounded-tr-md bg-primary/10 p-2">
              <div className="flex flex-col w-1/3">
                <div>{product_name}</div>
                <div className="text-label text-primary/50">
                  單位：<span>{unit}</span>
                </div>
              </div>
              <div className="flex justify-between flex-1">
                <div className="flex flex-col">
                  <span className="text-label text-primary/50">數量:</span>
                  <span className="self-end">{quantity}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label text-primary/50">成本:</span>
                  <span className="self-end">$ {price_per_unit}</span>
                </div>
                <div className="flex justify-end items-center">
                  <p className="text-label">{inbound_date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Cost;
