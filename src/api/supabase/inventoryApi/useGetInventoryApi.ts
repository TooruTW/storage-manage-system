import { useQuery } from "@tanstack/react-query";
import supabase from "..";
import { InventoryType } from "@/types/InventoryType";

const getInventoryApi = async () => {
  const { data: inventory, error } = await supabase
    .from("product")
    .select("*")
    .order("last_inbound_date", { ascending: false });

  if (error) {
    console.error("Get inventory error", error);
    throw error;
  }

  return (inventory as unknown as InventoryType[]) || [];
};

const useGetInventoryApi = () => {
  const data = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventoryApi,
  });
  return data;
};

export { useGetInventoryApi };
