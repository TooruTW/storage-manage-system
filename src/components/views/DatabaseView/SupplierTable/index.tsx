import { useEffect } from "react";

import { BaseTable, TableStateView } from "../shared";

import { columns } from "./Columns";

import { useGetSupplierApi } from "@/api/supabase/supplierApi/useGetSupplierApi";
import { usePatchSupplierApi } from "@/api/supabase/supplierApi/usePatchSupplierApi";

const SupplierTable = () => {
  const { data, isLoading } = useGetSupplierApi();

  const { mutate: patchSupplier, data: patchResult } = usePatchSupplierApi();

  useEffect(() => {
    if (patchResult) {
      // Handle patch result if needed
    }
  }, [patchResult]);

  if (isLoading) return <TableStateView type="loading" />;
  if (!data) return <TableStateView type="empty" />;

  return (
    <BaseTable
      data={data}
      columns={columns}
      updateDataToServer={patchSupplier}
    />
  );
};

export default SupplierTable;
