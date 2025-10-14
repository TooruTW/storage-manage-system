import { useQuery } from "@tanstack/react-query";
import supabase from "..";


const getConsignmentApi = async () => {
  const { data: consignment, error } = await supabase
    .from("consignment")
    .select(
      "id, product_name, unit, current_stock, last_update_date, customer:customer_id(name)"
    );

  if (error || !consignment) {
    console.error("Get consignment error", error);
    throw error;
  }

  console.log("data", consignment);

  const joinedData = consignment.map((item: any) => {
    return {
      id: item.id,
      product_name: item.product_name,
      unit: item.unit,
      current_stock: item.current_stock,
      last_update_date: item.last_update_date,
      name: item.customer.name,
    };
  });

  return joinedData;
};

const useGetConsignmentApi = () => {
  const data = useQuery({
    queryKey: ["consignment"],
    queryFn: getConsignmentApi,
  });
  return data;
};

export { useGetConsignmentApi };
