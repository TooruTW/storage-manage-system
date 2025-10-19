import { useQuery } from "@tanstack/react-query";
import supabase from "..";

export type Supplier = {
  address: "台中市北區三民路三段678號";
  contact_person: string;
  id: string;
  landline_phone: string;
  mobile_phone: string;
  name: string;
  remark: string;
};

const getSupplierApi = async () => {
  const { data: supplier, error } = await supabase
    .from("supplier")
    .select("*")
    .order("address", { ascending: true });

  if (error) {
    console.error("Get supplier error", error);
    throw error;
  }

  console.log("supplier", supplier);

  return supplier as Supplier[];
};

const useGetSupplierApi = () => {
  const data = useQuery({
    queryKey: ["supplier"],
    queryFn: getSupplierApi,
  });
  return data;
};

export { useGetSupplierApi };
