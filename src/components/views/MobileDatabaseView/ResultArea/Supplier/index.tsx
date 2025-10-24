import { useEffect, useState } from "react";

import { useGetSupplierApi } from "@/api/supabase/supplierApi/useGetSupplierApi";
import { TableStateView } from "@/components/views/DatabaseView/shared";
import type { SupplierType } from "@/types/SupplierType";

const Supplier = ({ object }: { object: string }) => {
  const { data: supplierData, isLoading } = useGetSupplierApi();
  const [data, setData] = useState<SupplierType[]>([]);

  useEffect(() => {
    if (!supplierData || isLoading) return;
    if (object === "") {
      setData(supplierData);
    } else {
      const filteredData = supplierData.filter((item) =>
        item.name.includes(object)
      );
      setData(filteredData);
    }
  }, [object, supplierData, isLoading]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  return (
    <ul className="w-full flex-1 overflow-y-auto flex flex-col gap-2">
      {data.map(
        (item) => {
          return (
            <li
              key={item.name}
              className="w-full flex gap-2 items-center rounded-md border-1 border-primary/10 p-2"
            >
              <div className="w-1/5 text-balance">
                {item.name.split(" ").map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div className="w-4/5">
                <p className="flex justify-between gap-4 items-center">
                  <span className="text-nowrap">{item.contact_person}</span>
                  <span className="text-paragraph-small text-primary/50">
                    {item.address}
                  </span>
                </p>
                <div className="grid grid-cols-2">
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">市話:</span>
                    <span className="self-end">{item.landline_phone}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-label text-primary/50">手機:</span>
                    <span className="self-end">{item.mobile_phone}</span>
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

export default Supplier;
