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
    <>
      <input
        type="text"
        list={`selector-options-${id}-${index}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        name={String(id)}
        className="w-full text-center h-full py-4"
      />
      <datalist id={`selector-options-${id}-${index}`}>
        <option value="出庫" />
        <option value="寄庫" />
        <option value="贈品" />
        <option value="成本異常" />
      </datalist>
    </>
  );
};

export default SelectorCell;
