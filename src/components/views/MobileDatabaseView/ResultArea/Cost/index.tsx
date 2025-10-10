import { useEffect, useState } from "react";
import { CostData } from "./type";
import { FAKE_COST_DATA } from "./constants";
type CostProps = {
  object: string;
  product: string;
};

const Cost = ({ object, product }: CostProps) => {
  const [data, setData] = useState<CostData[]>([]);
  useEffect(() => {
    setData(FAKE_COST_DATA);
  }, []);
  useEffect(() => {
    const filteredData = FAKE_COST_DATA.filter(
      (item) =>
        item.supplierName.includes(object) && item.productName.includes(product)
    );
    setData(filteredData);
  }, [object, product]);
  return (
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item) => {
          return (
            <li key={item.productName} className="w-full flex flex-col">
              <div className="w-fit text-balance rounded-t-md bg-primary text-primary-foreground px-2">
                <p>{item.supplierName}</p>
              </div>
              <div className="w-full flex gap-4 rounded-b-md rounded-tr-md bg-primary/10 p-2">
                <div className="flex flex-col w-1/3">
                  <div>{item.productName}</div>
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
                    <span className="self-end">$ {item.costPerUnit}</span>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-label">{item.lastInboundDate}</p>
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
