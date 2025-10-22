type CreateTab = {
  id: "outbound" | "inbound";
  label: string;
};

const CREATE_TAB: CreateTab[] = [
  { id: "outbound", label: "出貨" },
  { id: "inbound", label: "進貨" },
];

export { CREATE_TAB };
