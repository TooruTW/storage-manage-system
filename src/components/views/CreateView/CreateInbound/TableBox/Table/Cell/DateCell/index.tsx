import { useState, useEffect } from "react";
import { CellContext } from "@tanstack/react-table";
import dayjs from "dayjs";

// 通用的可編輯單元格組件
const DateCell = <TData extends Record<string, unknown>>({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue();

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);
  const [prevValue, setPrevValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    const date = dayjs(value as string);
    if (!date.isValid()) {
      setValue(prevValue);
      return;
    }
    table.options.meta?.updateData(index, id, date.format("YYYY-MM-DD"));
    setValue(date.format("YYYY-MM-DD"));
    setPrevValue(date.format("YYYY-MM-DD"));
  };

  useEffect(() => {
    setValue(initialValue);
    setPrevValue(initialValue);
  }, [initialValue]);

  return (
    <div className="flex justify-center items-center h-full">
      <input
        value={value as string}
        onChange={handleChange}
        type="date"
        onBlur={onBlur}
        name={String(id)}
        className="w-4/5 text-center h-full py-4 cursor-text"
      />
    </div>
  );
};

export default DateCell;
