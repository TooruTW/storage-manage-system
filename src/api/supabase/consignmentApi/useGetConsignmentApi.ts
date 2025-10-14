import { useQuery } from "@tanstack/react-query";
import supabase from "..";

const getConsignmentApi = async () => {
  const { data: consignment, error } = await supabase.from("consignment").select("*");


  if (error) {
    console.error("Get consignment error", error);
    throw error;
  }

  console.log("data", consignment);

  return consignment;
};

const useGetConsignmentApi = () => {
  const data = useQuery({
    queryKey: ["consignment"],
    queryFn: getConsignmentApi,
  });
  return data;
};

export { useGetConsignmentApi };
