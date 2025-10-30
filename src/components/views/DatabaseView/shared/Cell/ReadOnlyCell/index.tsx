import { useMemo } from "react";
import { CellContext } from "@tanstack/react-table";

// 通用的可編輯單元格組件
const ReadOnlyCell = <TData extends Record<string, unknown>>({
  getValue,
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue();
  const isEditing = table.options.meta?.isEditing || false;
  const cellStyle = useMemo(() => {
    if (isEditing) return "cursor-not-allowed";
    return "cursor-text";
  }, [isEditing]);
  return (
    <p className={`w-full text-center h-full py-4 ${cellStyle}`}>
      {initialValue as string}
    </p>
  );
};

export default ReadOnlyCell;
