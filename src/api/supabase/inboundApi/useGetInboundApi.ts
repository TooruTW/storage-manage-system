import { useQuery } from "@tanstack/react-query";
import supabase from "..";

type InboundResponseType = {
  id: string;
  supplier: {
    id: string;
    name: string;
  };
  product: {
    id: string;
    product_name: string;
    unit: string;
  };
  quantity: number;
  price_per_unit: number;
  inbound_date: string;
  remark: string;
};

const getInboundApi = async () => {
  const { data: inbound, error } = await supabase
    .from("inbound")
    .select(
      "id, supplier:supplier_id(id, name), product:product_id(id, product_name,unit), quantity, price_per_unit, inbound_date, remark"
    ).order("inbound_date", { ascending: false });
  if (error) {
    console.error("Get inbound error", error);
    throw error;
  }

  const result = inbound as unknown as InboundResponseType[];

  const joinedData = result.map((item) => {
    return {
      id: item.id,
      supplier_id: item.supplier.id,
      supplier_name: item.supplier.name,
      product_id: item.product.id,
      product_name: item.product.product_name,
      unit: item.product.unit,
      quantity: item.quantity,
      price_per_unit: item.price_per_unit,
      inbound_date: item.inbound_date,
      remark: item.remark || "",
    };
  });

  return joinedData;
};

const useGetInboundApi = () => {
  const data = useQuery({
    queryKey: ["inbound"],
    queryFn: getInboundApi,
  });
  return data;
};

export { useGetInboundApi };
