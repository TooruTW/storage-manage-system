import { BaseTable, TableStateView } from "../shared";

import { columns } from "./Columns";

import useDeleteInboundApi from "@/api/supabase/inboundApi/useDeleteInboundApi";
import { useGetInboundApi } from "@/api/supabase/inboundApi/useGetInboundApi";

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
