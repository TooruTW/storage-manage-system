import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetConsignmentApi } from "@/api/supabase/consignmentApi/useGetConsignmentApi";

const ConsignmentTable = () => {
  const { data, isLoading } = useGetConsignmentApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!data) return <TableStateView type="empty" />;
  return <BaseTable data={data} columns={columns} />;
};

export default ConsignmentTable;
