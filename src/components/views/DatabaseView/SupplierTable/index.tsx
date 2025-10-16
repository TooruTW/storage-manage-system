import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetSupplierApi } from "@/api/supabase/supplierApi/useGetSupplierApi";
import { usePatchSupplierApi } from "@/api/supabase/supplierApi/usePatchSupplierApi";
import { useEffect } from "react";

const SupplierTable = () => {
  const { data, isLoading } = useGetSupplierApi();

  const { mutate: patchSupplier, data: patchResult } = usePatchSupplierApi();

  useEffect(() => {
    if (patchResult) {
      console.log("patchResult", patchResult);
    }
  }, [patchResult]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  return <BaseTable data={data} columns={columns} updateData={patchSupplier} />;
};

export default SupplierTable;
