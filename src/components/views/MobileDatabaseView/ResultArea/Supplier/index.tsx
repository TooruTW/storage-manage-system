import { useEffect, useState } from "react";

import { TableStateView } from "@/components/views/DatabaseView/shared";

import VirtualList from "../shared/VirtualList";

import { useGetSupplierApi } from "@/api/supabase/supplierApi/useGetSupplierApi";

import type { SupplierType } from "@/types/SupplierType";

const Supplier = ({ object }: { object: string }) => {
  const { data: supplierData, isLoading } = useGetSupplierApi();
  const [data, setData] = useState<SupplierType[]>([]);

  useEffect(() => {
    if (!supplierData || isLoading) return;
    let tempData = [...supplierData];
    if (object !== "") {
      tempData = tempData.filter((item) => item.name.includes(object));
    }
    setData(tempData);
  }, [object, supplierData, isLoading]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  return (
    <VirtualList
      data={data}
      getItemKey={(item, index) => `${item.id}-${index}-${item.name}`}
      renderItem={(item) => {
        const { name, contact_person, address, landline_phone, mobile_phone } =
          item;
        return (
          <div className="w-full flex gap-2 items-center rounded-md border-1 border-primary/10 p-2 mb-2">
            <div className="w-1/5 text-balance">
              {name.split(" ").map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="w-4/5">
              <p className="flex justify-between gap-4 items-center">
                <span className="text-nowrap">{contact_person}</span>
                <span className="text-paragraph-small text-primary/50">
                  {address}
                </span>
              </p>
              <div className="grid grid-cols-2">
                <div className="flex flex-col">
                  <span className="text-label text-primary/50">市話:</span>
                  <span className="self-end">{landline_phone}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-label text-primary/50">手機:</span>
                  <span className="self-end">{mobile_phone}</span>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Supplier;
