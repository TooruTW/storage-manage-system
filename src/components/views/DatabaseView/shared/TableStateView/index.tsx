import { Box } from "lucide-react";

type TableStateViewProps = {
  type: "loading" | "empty" | "error";
  message?: string;
};

const TableStateView = ({ type, message }: TableStateViewProps) => {
  const defaultMessages = {
    loading: "Loading...",
    empty: "No data",
    error: "Error loading data",
  };

  const displayMessage = message || defaultMessages[type];

  return (
    <div
      className={`flex justify-center items-center gap-2 h-full ${
        type === "loading" ? "animate-pulse" : ""
      }`}
    >
      <Box strokeWidth={0.5} className="size-20"></Box>
      <h1 className="text-h1 text-primary">{displayMessage}</h1>
    </div>
  );
};

export default TableStateView;
