type OutboundSearchingTab = {
    id: "all" | "purchaseHistory" ;
    label: string;
}

const OUTBOUND_SEARCHING_TAB_CONSTANTS: OutboundSearchingTab[] = [
  { id: "all", label: "全部" },
  { id: "purchaseHistory", label: "進貨紀錄" },
];

export { OUTBOUND_SEARCHING_TAB_CONSTANTS };
