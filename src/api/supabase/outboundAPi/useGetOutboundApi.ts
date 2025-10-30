import { useQuery } from "@tanstack/react-query";
import supabase from "..";

type OutboundResponseType = {
  id: string;
  customer: {
    id: string;
    name: string;
  };
  product: {
    id: string;
    product_name: string;
    unit: string;
  };
  cost_per_unit: number;
  quantity: number;
  price_per_unit: number;
  shipment_date: string;
  total_price: number;
  net_profit: number;
  remark: string;
};

const getOutboundApi = async () => {
  const { data: outbound, error } = await supabase
    .from("outbound")
    .select(
      "id, customer:customer_id(id, name), product:product_id(id, product_name,unit), cost_per_unit, quantity, price_per_unit, shipment_date, total_price, net_profit, remark"
    ).order("shipment_date", { ascending: false });
  if (error) {
    console.error("Get outbound error", error);
    throw error;
  }

  const result = outbound as unknown as OutboundResponseType[];

  const joinedData = result.map((item) => {
    return {
      id: item.id,
      customer_id: item.customer.id,
      customer_name: item.customer.name,
      product_id: item.product.id,
      product_name: item.product.product_name,
      unit: item.product.unit,
      cost_per_unit: item.cost_per_unit,
      quantity: item.quantity,
      price_per_unit: item.price_per_unit,
      shipment_date: item.shipment_date,
      total_price: item.total_price,
      net_profit: item.net_profit,
      remark: item.remark || "",
    };
  });

  return joinedData;
};

const useGetOutboundApi = () => {
  const data = useQuery({
    queryKey: ["outbound"],
    queryFn: getOutboundApi,
  });
  return data;
};

export { useGetOutboundApi };
