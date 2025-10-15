
import { columns } from "./Columns";
import { BaseTable } from "../shared";
import { useGetCustomerApi } from "@/api/supabase/customerApi/useGetCustomerApi";
import { TableStateView } from "../shared";

const CustomTable = () => {
  const { data, isLoading } = useGetCustomerApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!data) return <TableStateView type="empty" />;

  return <BaseTable data={data} columns={columns} />;
};

export default CustomTable;
