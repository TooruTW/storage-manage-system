export type CreateInbound = {
    supplierName: string;
    productName: string;
    unit: string;
    quantity: number;
    pricePerUnit: number;
    totalPrice: number;
    remark: "";
    lastInboundDate: string;
}