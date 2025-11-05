import { BaseTable, TableStateView } from "../shared";

import { columns } from "./Columns";

import useDeleteOutboundApi from "@/api/supabase/outboundApi/useDeleteOutboundApi";
import { useGetOutboundApi } from "@/api/supabase/outboundApi/useGetOutboundApi";

const OutboundTable = () => {
  const { data: outboundData, isLoading } = useGetOutboundApi();
  const { mutate: deleteOutbound } = useDeleteOutboundApi();
  if (isLoading) return <TableStateView type="loading" />;

  if (!outboundData) return <TableStateView type="empty" />;

  return (
    <BaseTable
      data={outboundData}
      columns={columns}
      deleteDataToServer={deleteOutbound}
    />
  );
};

export default OutboundTable;
