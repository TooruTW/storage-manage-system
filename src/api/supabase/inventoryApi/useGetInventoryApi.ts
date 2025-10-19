import supabase from "..";
import { useQuery } from "@tanstack/react-query";

export type Inventory = {
  id: string;
  product_name: string;
  unit: string;
  quantity: number;
  last_inbound_date: string;
}

const getInventoryApi = async () => {
  const { data: inventory, error } = await supabase
    .from("product")
    .select("*")
    .order("last_inbound_date", { ascending: false });

    if (error) {
        console.error("Get inventory error", error);
        throw error;
    }

    return inventory as unknown as Inventory[] || [];
};

const useGetInventoryApi = () => {
  const data = useQuery({
    queryKey: ["inventory"],
    queryFn: getInventoryApi,
  });
  return data;
};

export { useGetInventoryApi };