import { useMemo } from "react";

import { Box } from "lucide-react";

type TableStateViewProps = {
  type: "loading" | "empty" | "error";
};

const TableStateView: React.FC<TableStateViewProps> = ({ type }) => {
  const defaultMessages = {
    loading: "Loading...",
    empty: "No data",
    error: "Error loading data",
  };

  const style = useMemo(() => {
    if (type === "loading") return "animate-pulse";
    return "";
  }, [type]);

  const displayMessage = defaultMessages[type];

  return (
    <div className={`flex justify-center items-center gap-2 h-full ${style}`}>
      <Box strokeWidth={0.5} className="size-20"></Box>
      <h1 className="text-h1 text-primary">{displayMessage}</h1>
    </div>
  );
};

export default TableStateView;
