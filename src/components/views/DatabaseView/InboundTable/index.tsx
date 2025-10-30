import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";

import { useGetInboundApi } from "@/api/supabase/inboundAPi/useGetInboundApi";
import useDeleteInboundApi from "@/api/supabase/inboundAPi/useDeleteInboundApi";

const InboundTable = () => {
  const { data: inboundData, isLoading } = useGetInboundApi();
  const { mutate: deleteInbound } = useDeleteInboundApi();
  if (isLoading) return <TableStateView type="loading" />;
  if (!inboundData) return <TableStateView type="empty" />;
  return (
    <BaseTable
      data={inboundData}
      columns={columns}
      deleteDataToServer={deleteInbound}
    />
  );
};

export default InboundTable;
