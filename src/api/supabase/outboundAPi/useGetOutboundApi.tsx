import supabase from "..";
import { useQuery } from "@tanstack/react-query";

type Outbound = {
  id: string;
  customer: {
    id: string;
    name: string;
  };
  inbound: {
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
      "id, customer:customer_id(id, name), inbound:product_id(product_name,unit), cost_per_unit, quantity, price_per_unit, shipment_date, total_price, net_profit, remark"
    )
  if (error) {
    console.error("Get outbound error", error);
    throw error;
  }

  const result = outbound as unknown as Outbound[];

  console.log("outbound", outbound);

  const joinedData = result.map((item) => {
    return {
      id: item.id,
      name: item.customer.name,
      product_name: item.inbound.product_name,
      unit: item.inbound.unit,
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
