import { useQuery } from "@tanstack/react-query";
import supabase from "..";

const getCustomerApi = async () => {
  const { data: customer, error } = await supabase
    .from("customer")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Get customer error", error);
    throw error;
  }

  console.log("data", customer);

  return customer;
};

const useGetCustomerApi = () => {
  const data = useQuery({
    queryKey: ["customer"],
    queryFn: getCustomerApi,
  });
  return data;
};

export { useGetCustomerApi };
