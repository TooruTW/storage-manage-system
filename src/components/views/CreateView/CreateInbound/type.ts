export type CreateInbound = {
  supplier_id: string;
  product_id: string;
  supplier_name: string;
  product_name: string;
  unit: string;
  quantity: number;
  price_per_unit: number;
  total_price: number;
  remark: "";
  last_inbound_date: string;
};
