import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetSupplierApi } from "@/api/supabase/supplierApi/useGetSupplierApi";

const SupplierTable = () => {
  const { data, isLoading } = useGetSupplierApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!data) return <TableStateView type="empty" />;

  return <BaseTable data={data} columns={columns} />;
};

export default SupplierTable;
