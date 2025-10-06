import { useState, useEffect } from "react";
import { CellContext } from "@tanstack/react-table";

// 通用的可編輯單元格組件
const NumberCell = <TData extends Record<string, unknown>>({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue();

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      type="number"
      value={value as number}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      min={0}
      className={`w-full text-right h-full py-4 cursor-text `}
    />
  );
};

export default NumberCell;
