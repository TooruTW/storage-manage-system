import { BaseTable, TableStateView } from "../shared";

import { columns } from "./Columns";

import { useGetConsignmentApi } from "@/api/supabase/consignmentApi/useGetConsignmentApi";
import { usePatchConsignmentApi } from "@/api/supabase/consignmentApi/usePatchConsignmentApi";

const ConsignmentTable = () => {
  const { data, isLoading } = useGetConsignmentApi();
  const { mutate: patchConsignment } = usePatchConsignmentApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!data) return <TableStateView type="empty" />;
  return (
    <BaseTable
      data={data}
      columns={columns}
      updateDataToServer={patchConsignment}
    />
  );
};

export default ConsignmentTable;
