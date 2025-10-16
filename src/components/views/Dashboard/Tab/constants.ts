type TimeRange = {
    id: "month" | "quarter" | "year";
    label: string;
}

const TIME_RANGE_CONSTANTS: TimeRange[] = [
  { id: "month", label: "月度" },
  { id: "quarter", label: "季度" },
  { id: "year", label: "年度" },
];

export { TIME_RANGE_CONSTANTS };
