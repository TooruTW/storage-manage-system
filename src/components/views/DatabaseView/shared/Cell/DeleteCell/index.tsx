import { CellContext } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";

// 通用的可編輯單元格組件
const DeleteCell = <TData extends Record<string, unknown>>({
  row: { original },
  table,
}: CellContext<TData, unknown>) => {
  const handleDelete = () => {
    table.options.meta?.deleteData?.(original.id as string);
  };

  return (
    <div className="w-full text-center h-full py-4 flex items-center justify-center">
      <Trash2 size={18} onClick={handleDelete} />
    </div>
  );
};

export default DeleteCell;
