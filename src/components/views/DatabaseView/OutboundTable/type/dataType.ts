export type Outbound = {
  id: string; // 出貨單號
  customer_name: string; // 客戶名
  product_id: string; // 商品ID
  product_name: string; // 商品名
  unit: string; // 單位
  cost_per_unit: number; // 單成本
  quantity: number; // 數量
  price_per_unit: number; // 單價
  shipment_date: string; // 出貨日
  total_price: number; // 總價
  net_profit: number; // 淨利潤
  remark: string; // 備註
};
