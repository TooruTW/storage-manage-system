
import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetInboundApi } from "../../../../api/supabase/inboundAPi/useGetInboundApi";

const InboundTable = () => {
  const { data: inboundData, isLoading } = useGetInboundApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!inboundData) return <TableStateView type="empty" />;

  return <BaseTable data={inboundData} columns={columns} />;
};

export default InboundTable;
