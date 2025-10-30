import { useEffect } from "react";

import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";

import { useGetCustomerApi } from "@/api/supabase/customerApi/useGetCustomerApi";
import { usePatchCustomerApi } from "@/api/supabase/customerApi/usePatchCustomerApi";

const CustomTable = () => {
  const { data, isLoading } = useGetCustomerApi();

  const { mutate: patchCustomer, data: patchResult } = usePatchCustomerApi();

  useEffect(() => {
    if (patchResult) {
      console.log("patchResult", patchResult);
    }
  }, [patchResult]);

  if (isLoading) return <TableStateView type="loading" />;

  if (!data) return <TableStateView type="empty" />;

  return (
    <BaseTable
      data={data}
      columns={columns}
      updateDataToServer={patchCustomer}
    />
  );
};

export default CustomTable;
