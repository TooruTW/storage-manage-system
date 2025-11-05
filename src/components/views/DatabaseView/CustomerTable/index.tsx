import { useEffect } from "react";

import { BaseTable, TableStateView } from "../shared";

import { columns } from "./Columns";

import { useGetCustomerApi } from "@/api/supabase/customerApi/useGetCustomerApi";
import { usePatchCustomerApi } from "@/api/supabase/customerApi/usePatchCustomerApi";

const CustomerTable = () => {
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

export default CustomerTable;
