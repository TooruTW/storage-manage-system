import supabase from "..";
import { useQuery } from "@tanstack/react-query";

const getOutboundApi = async () => {
  const { data: outbound, error } = await supabase
    .from("outbound")
    .select(
      "id, customer:customer_id(name), product_name, unit, cost_per_unit, quantity, price_per_unit, shipment_date, total_price, net_profit, remark"
    );
  if (error) {
    console.error("Get outbound error", error);
    throw error;
  }


  const joinedData = outbound.map((item: any) => {
    return {
     id: item.id,
     name: item.customer.name,
     product_name: item.product_name,
     unit: item.unit,
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
