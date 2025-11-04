import { useEffect, useState } from "react";
import { Column } from "@tanstack/react-table";

interface FilterProps<TData> {
  column: Column<TData, unknown>;
}

const Filter = <TData extends Record<string, unknown>>({
  column,
}: FilterProps<TData>) => {
  const columnFilterValue = column.getFilterValue();
  const [inputValue, setInputValue] = useState(
    (columnFilterValue ?? "") as string
  );

  useEffect(() => {
    if (!columnFilterValue) setInputValue("");
  }, [columnFilterValue]);

  const handleBlur = () => {
    column.setFilterValue(inputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      placeholder={`搜尋...`}
      className="w-9/10 border shadow rounded px-4 py-1"
    />
  );
};

export { Filter };
