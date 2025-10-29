type TimeRange = {
  id: "month" | "quarter" | "year";
  label: string;
};

const TIME_RANGES: TimeRange[] = [
  { id: "month", label: "月度" },
  { id: "quarter", label: "季度" },
];

export { TIME_RANGES };
