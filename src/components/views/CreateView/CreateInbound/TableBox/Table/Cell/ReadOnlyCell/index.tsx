import { CellContext } from "@tanstack/react-table";

// 只讀的單元格組件
const ReadOnlyCell = <TData extends Record<string, unknown>>({
  getValue,
}: CellContext<TData, unknown>) => {
  const value = getValue();

  return (
    <div className="w-full text-center h-full py-4 flex items-center justify-center">
      <span >{value as string}</span>
    </div>
  );
};

export default ReadOnlyCell;
