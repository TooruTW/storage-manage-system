type CreateTab = {
    id: "outbound" | "inbound" | "customer" | "supplier";
    label: string;
}

const CREATE_TAB_CONSTANTS: CreateTab[] = [
  { id: "outbound", label: "出貨" },
  { id: "inbound", label: "進貨" },
  { id: "customer", label: "客戶" },
  { id: "supplier", label: "進貨商" },
];

export { CREATE_TAB_CONSTANTS };
