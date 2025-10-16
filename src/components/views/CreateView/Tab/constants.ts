type CreateTab = {
    id: "outbound" | "inbound" | "customer" | "supplier";
    label: string;
}

const CREATE_TAB_CONSTANTS: CreateTab[] = [
  { id: "outbound", label: "出貨" },
  { id: "inbound", label: "進貨" },
];

export { CREATE_TAB_CONSTANTS };
