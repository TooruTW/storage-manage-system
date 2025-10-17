import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetConsignmentApi } from "@/api/supabase/consignmentApi/useGetConsignmentApi";
import { usePatchConsignmentApi } from "@/api/supabase/consignmentApi/usePatchConsignmentApi";

const ConsignmentTable = () => {
  const { data, isLoading } = useGetConsignmentApi();
  const { mutate: patchConsignment } = usePatchConsignmentApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!data) return <TableStateView type="empty" />;
  return <BaseTable data={data} columns={columns} updateData={patchConsignment} />;
};

export default ConsignmentTable;
