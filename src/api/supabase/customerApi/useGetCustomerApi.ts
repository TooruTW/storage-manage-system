import { useQuery } from "@tanstack/react-query";
import supabase from "..";

export type CustomerType = {
  address: string;
  contact_person: string;
  id: string;
  landline_phone: string;
  mobile_phone: string;
  name: string;
};

const getCustomerApi = async () => {
  const { data: customer, error } = await supabase
    .from("customer")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Get customer error", error);
    throw error;
  }

  return customer as CustomerType[];
};

const useGetCustomerApi = () => {
  const data = useQuery({
    queryKey: ["customer"],
    queryFn: getCustomerApi,
  });
  return data;
};

export { useGetCustomerApi };
