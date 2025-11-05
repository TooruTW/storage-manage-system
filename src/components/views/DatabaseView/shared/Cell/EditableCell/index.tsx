import { useState, useEffect, useMemo } from "react";
import { CellContext } from "@tanstack/react-table";

// 通用的可編輯單元格組件
const EditableCell = <TData extends Record<string, unknown>>({
  getValue,
  row: { index, original },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue() || "";
  const isEditing = table.options.meta?.isEditing || false;

  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.collectData?.(
      original.id as string,
      id as string,
      value
    );
    table.options.meta?.updateData(index, id, value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onBlur();
      e.currentTarget.blur();
    }
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const inputStyle = useMemo(() => {
    if (isEditing) return "italic";
    return "cursor-text";
  }, [isEditing]);
  return (
    <input
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      className={`w-full text-center h-full py-4 ${inputStyle}`}
      disabled={!isEditing}
    />
  );
};

export default EditableCell;
