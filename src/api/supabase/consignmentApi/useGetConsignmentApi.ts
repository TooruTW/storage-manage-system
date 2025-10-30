import { useQuery } from "@tanstack/react-query";
import supabase from "..";

type ConsignmentResponseType = {
  id: string;
  product: {
    product_name: string;
    unit: string;
  };
  current_stock: number;
  last_update_date: string;
  customer: {
    name: string;
  };
};

const getConsignmentApi = async () => {
  const { data: consignment, error } = await supabase
    .from("consignment")
    .select(
      "id, product:product_id(product_name, unit), current_stock, last_update_date, customer:customer_id(name)"
    )
  if (error || !consignment) {
    console.error("Get consignment error", error);
    throw error;
  }


  const result = consignment as unknown as ConsignmentResponseType[];
  const joinedData = result.map((item) => {
    return {
      id: item.id,
      product_name: item.product.product_name,
      unit: item.product.unit,
      current_stock: item.current_stock,
      last_update_date: item.last_update_date,
      name: item.customer.name,
    };
  }).sort((a, b) => a.name.localeCompare(b.name));

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
