import { CellContext } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import useCreateOutbound from "@/stores/useCreateOutbound";

// 刪除按鈕單元格組件
const DeleteCell = <TData extends Record<string, unknown>>({
  row,
}: CellContext<TData, unknown>) => {
  const { removeCreateOutbound, saveCreateOutbound } = useCreateOutbound();

  const handleDelete = () => {
    removeCreateOutbound(row.index);
    saveCreateOutbound();
  };

  return (
    <div className="w-full text-center h-full py-4 flex items-center justify-center">
      <button
        onClick={handleDelete}
        className="text-primary hover:text-red-700 hover:bg-red-50 rounded-full p-2 transition-colors"
        title="刪除此項"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default DeleteCell;
