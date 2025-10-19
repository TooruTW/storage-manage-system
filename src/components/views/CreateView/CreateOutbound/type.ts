export type CreateOutbound = {
    customer_id: string;
    product_id: string;
    customer_name: string;
    product_name: string;
    unit: string;
    cost_per_unit: number;
    quantity: number;
    price_per_unit: number;
    shipment_date: string;
    total_price: number;
    net_profit: number;
    remark: "" | "贈品" | "出庫" | "寄庫" | "贈品" | "成本異常";
}