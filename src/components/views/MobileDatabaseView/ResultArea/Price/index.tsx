import { useEffect, useState } from "react";
import { Box } from "lucide-react";

import { FAKE_PRICE_DATA } from "./constants";
import { PriceData } from "./type";

type PriceProps = {
  object: string;
  product: string;
};

const Price = ({ object, product }: PriceProps) => {
  const [data, setData] = useState<PriceData[]>([]);
  useEffect(() => {
    setData(FAKE_PRICE_DATA);
  }, []);
  useEffect(() => {
    const filteredData = FAKE_PRICE_DATA.filter(
      (item) =>
        item.customerName.includes(object) && item.productName.includes(product)
    );
    setData(filteredData);
  }, [object, product]);

  if (object === "" && product === "")
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <Box className="size-30" strokeWidth={0.5} />
        <h2 className="text-h2 font-normal">請輸入篩選條件</h2>
      </div>
    );

  return (
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item) => {
          return (
            <li key={item.productName} className="w-full flex flex-col">
              <div className="w-fit text-balance rounded-t-md bg-primary text-primary-foreground px-2">
                <p>{item.customerName}</p>
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
                    <span className="text-label text-primary/50">賣價:</span>
                    <span className="self-end">$ {item.pricePerUnit}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">成本:</span>
                    <span className="self-end">$ {item.costPerUnit}</span>
                  </div>
                  <div className="flex justify-end items-center">
                    <p className="text-label">{item.lastOutboundDate}</p>
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
