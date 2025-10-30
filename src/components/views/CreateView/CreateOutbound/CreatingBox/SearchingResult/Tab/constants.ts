type OutboundSearchingTab = {
  id: "all" | "purchaseHistory";
  label: string;
};

const OUTBOUND_SEARCHING_TAB: OutboundSearchingTab[] = [
  { id: "all", label: "全部" },
  { id: "purchaseHistory", label: "過去購買" },
];

export { OUTBOUND_SEARCHING_TAB };
