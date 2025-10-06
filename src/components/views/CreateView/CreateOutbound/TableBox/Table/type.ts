export type CreateOutbound = {
    customerName: string;
    productName: string;
    unit: string;
    costPerUnit: number;
    quantity: number;
    pricePerUnit: number;
    shipmentDate: string;
    totalPrice: number;
    netProfit: number;
    remark: null | "贈品" | "出庫" | "寄庫" | "贈品" | "成本異常";
}