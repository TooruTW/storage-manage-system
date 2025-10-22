export type Inventory = {
  id: string; // 商品ID
  product_name: string; // 商品名
  unit: string; // 單位
  quantity: number; // 當前庫存量
  last_inbound_date: string; // 最後進貨日
  last_cost_per_unit: number; // 最後進貨單價
};
