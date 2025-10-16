import { useState, useEffect } from "react";
import { CellContext } from "@tanstack/react-table";

// 通用的可編輯單元格組件
const EditableCell = <TData extends Record<string, unknown>>({
  getValue,
  row: { index, original },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  const initialValue = getValue();
  const isEditing = table.options.meta?.isEditing || false;

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.collectData(original.id as string, id as string, value);
    table.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className={`w-full text-center h-full py-4 ${
        !isEditing ? "cursor-text" : "italic"
      }`}
      disabled={!isEditing}
    />
  );
};

export default EditableCell;
