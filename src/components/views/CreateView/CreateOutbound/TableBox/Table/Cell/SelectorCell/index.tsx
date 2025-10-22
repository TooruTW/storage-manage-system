import { useState, useEffect } from "react";
import { CellContext } from "@tanstack/react-table";

// 通用的可編輯單元格組件
const SelectorCell = <TData extends Record<string, unknown>>({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue() as "出庫" | "寄庫" | "贈品" | "成本異常" | "";

  const [value, setValue] = useState<string>(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value as typeof initialValue)}
      onBlur={onBlur}
      className="w-full text-center h-full py-4 cursor-text"
    >
      <option value=""></option>
      <option value="出庫">出庫</option>
      <option value="寄庫">寄庫</option>
      <option value="贈品">贈品</option>
      <option value="成本異常">成本異常</option>
    </select>
  );
};

export default SelectorCell;
