import { useEffect, useState } from "react";

import { FAKE_SUPPLIER_DATA } from "./constants";
import { SupplierData } from "./type";

type CostProps = {
  object: string;
};

const Cost = ({ object }: CostProps) => {
  const [data, setData] = useState<SupplierData[]>([]);
  useEffect(() => {
    setData(FAKE_SUPPLIER_DATA);
  }, []);
  useEffect(() => {
    const filteredData = FAKE_SUPPLIER_DATA.filter((item) =>
      item.supplierName.includes(object)
    );
    setData(filteredData);
  }, [object]);
  return (
    <ul className="w-full h-full overflow-y-auto flex flex-col gap-2 pb-20">
      {data.map(
        (item) => {
          return (
            <li
              key={item.supplierName}
              className="w-full flex gap-2 items-center  rounded-md border-1 border-primary/10 p-2"
            >
              <div className="w-1/5 text-balance">
                {item.supplierName.split(" ").map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="w-4/5">
                <p className="flex justify-between gap-4 items-center">
                  <span className="text-nowrap">{item.contactPerson}</span>
                  <span className="text-paragraph-small text-primary/50">
                    {item.address}
                  </span>
                </p>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">市話:</span>
                    <span className="self-end">{item.landlinePhone}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">手機:</span>
                    <span className="self-end">{item.mobilePhone}</span>
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
