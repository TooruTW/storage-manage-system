import { useState, useEffect, useMemo } from "react";
import { CellContext } from "@tanstack/react-table";

// 通用的可編輯單元格組件
const MoneyCell = <TData extends Record<string, unknown>>({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue();

  function formatValue(value: number) {
    return value.toLocaleString();
  }

  function parseFormattedValue(formattedValue: string): number {
    if (typeof formattedValue === "number") return formattedValue;
    // 移除逗號並轉換為數字
    return Number(formattedValue.toString().replace(/,/g, ""));
  }

  const [value, setValue] = useState<number | string>(
    formatValue(initialValue as number)
  );
  const [valueType, setValueType] = useState<"number" | "string">("string");
  const warningStyle = useMemo(()=>{
    if(Number(value) < 0) return "text-red-500";
    return "";
  },[value])

  const onBlur = () => {
    table.options.meta?.updateData(index, id, Number(value));
    setValue(formatValue(Number(value)));
    setValueType("string");
  };

  useEffect(() => {
    setValue(formatValue(initialValue as number));
  }, [initialValue]);

  return (
    <div className={`relative ${warningStyle}`}>
      <input
        type={valueType}
        value={value as number | string}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setValue((prev) => {
            const numericValue = parseFormattedValue(prev as string);
            return numericValue;
          });
          setValueType("number");
        }}
        onBlur={onBlur}
        className={`w-full text-center h-full py-4 cursor-text `}
      />
    </div>
  );
};

export default MoneyCell;
