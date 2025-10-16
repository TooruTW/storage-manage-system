import { useQuery } from "@tanstack/react-query";
import supabase from "..";

const getSupplierApi = async () => {
  const { data: supplier, error } = await supabase
    .from("supplier")
    .select("*")
    .order("address", { ascending: true });

  if (error) {
    console.error("Get supplier error", error);
    throw error;
  }

  return supplier;
};

const useGetSupplierApi = () => {
  const data = useQuery({
    queryKey: ["supplier"],
    queryFn: getSupplierApi,
  });
  return data;
};

export { useGetSupplierApi };
