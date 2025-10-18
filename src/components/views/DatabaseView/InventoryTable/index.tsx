
import { columns } from "./Columns";
import { BaseTable, TableStateView } from "../shared";
import { useGetInventoryApi } from "@/api/supabase/inventoryApi/useGetInventoryApi";
import { usePatchInventoryApi } from "@/api/supabase/inventoryApi/usePatchInventoryApi";
const InventoryTable = () => {
  const { data: inventoryData, isLoading } = useGetInventoryApi();
  const { mutate: patchInventory } = usePatchInventoryApi();

  if (isLoading) return <TableStateView type="loading" />;

  if (!inventoryData) return <TableStateView type="empty" />;

  return <BaseTable data={inventoryData} columns={columns} updateDataToServer={patchInventory} />;
};

export default InventoryTable;
