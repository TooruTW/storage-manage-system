
import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetOutboundApi } from "@/api/supabase/outboundAPi/useGetOutboundApi";

const OutboundTable = () => {
  const { data: outboundData, isLoading } = useGetOutboundApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!outboundData) return <TableStateView type="empty" />;

  return <BaseTable data={outboundData} columns={columns} />;
};

export default OutboundTable;
