
import { columns } from "./Columns";
import { BaseTable } from "../shared";
import { useGetCustomerApi } from "@/api/supabase/customerApi/useGetCustomerApi";
import { TableStateView } from "../shared";
import { usePatchCustomerApi } from "@/api/supabase/customerApi/usePatchCustomerApi";
import { useEffect } from "react";

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

  return <BaseTable data={data} columns={columns} updateData={patchCustomer} />;
};

export default CustomTable;
