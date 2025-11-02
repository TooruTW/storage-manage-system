import { useEffect, useMemo, useState } from "react";

import { useGetOutboundApi } from "@/api/supabase/outboundAPi/useGetOutboundApi";
import { TableStateView } from "@/components/views/DatabaseView/shared";
import ConditionRequired from "../shared/ConditionRequired";

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
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item, index) => {
          return (
            <li
              key={`${item.id}-${index}-${item.shipment_date}`}
              className="w-full flex flex-col"
            >
              <div className="w-fit text-balance rounded-t-md bg-primary text-primary-foreground px-2">
                <p>{item.customer_name}</p>
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
                    <span className="text-label text-primary/50">賣價:</span>
                    <span className="self-end">$ {item.price_per_unit}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">成本:</span>
                    <span className="self-end">$ {item.cost_per_unit}</span>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-label">{item.shipment_date}</p>
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

export default Price;
