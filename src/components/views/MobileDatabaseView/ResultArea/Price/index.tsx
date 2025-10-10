import { useEffect, useState } from "react";
import { PriceData } from "./type";
import { FAKE_PRICE_DATA } from "./constants";
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
  return (
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item) => {
          return (
            <li className="w-full flex gap-2 items-center  rounded-md border-1 border-primary/10 p-2">
              <div className="w-1/5 text-balance">
                {item.customerName.split(" ").map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="w-4/5">
                <p className="flex justify-between">
                  <span>{item.productName}</span>
                  <span className="text-paragraph-small">
                    單位：<span>{item.unit}</span>
                  </span>
                </p>
                <div className="grid grid-cols-3">
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">賣價:</span>
                    <span className="self-end">$ {item.pricePerUnit}</span>
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

export default Price;
