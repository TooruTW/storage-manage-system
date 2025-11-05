import { useEffect, useMemo, useState } from "react";

import { TableStateView } from "@/components/views/DatabaseView/shared";

import ConditionRequired from "../shared/ConditionRequired";
import VirtualList from "../shared/VirtualList";

import { useGetOutboundApi } from "@/api/supabase/outboundApi/useGetOutboundApi";

import { OutboundType } from "@/types/OutboundType";

const Price = ({ object, product }: { object: string; product: string }) => {
  const [data, setData] = useState<OutboundType[]>([]);
  const { data: outboundData, isLoading } = useGetOutboundApi();
  const isFiltering = useMemo(() => {
    return object !== "" || product !== "";
  }, [object, product]);

  useEffect(() => {
    if (!outboundData || isLoading) return;
    let tempData = [...outboundData];

    if (object !== "") {
      tempData = tempData.filter((item) => item.customer_name.includes(object));
    }
    if (product !== "") {
      tempData = tempData.filter((item) => item.product_name.includes(product));
    }

    setData(tempData);
  }, [object, product, outboundData, isLoading, isFiltering]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  if (!isFiltering) {
    return <ConditionRequired />;
  }

  return (
    <VirtualList
      data={data}
      getItemKey={(item, index) => `${item.id}-${index}-${item.shipment_date}`}
      renderItem={(item) => {
        const {
          customer_name,
          product_name,
          unit,
          price_per_unit,
          cost_per_unit,
          shipment_date,
        } = item;
        return (
          <div className="w-full flex flex-col mb-2">
            <div className="w-fit text-balance rounded-t-md bg-primary text-primary-foreground px-2">
              <p>{customer_name}</p>
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
                  <span className="text-label text-primary/50">賣價:</span>
                  <span className="self-end">$ {price_per_unit}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label text-primary/50">成本:</span>
                  <span className="self-end">$ {cost_per_unit}</span>
                </div>
                <div className="flex justify-end items-center">
                  <p className="text-label">{shipment_date}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Price;
