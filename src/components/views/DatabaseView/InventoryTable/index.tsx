
import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetInventoryApi } from "@/api/supabase/inventoryApi/useGetInventoryApi";

const InventoryTable = () => {
  const { data: inventoryData, isLoading } = useGetInventoryApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!inventoryData) return <TableStateView type="empty" />;

  return <BaseTable data={inventoryData} columns={columns} />;
};

export default InventoryTable;
