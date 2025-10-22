import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { columns } from "./column";

import useCreateOutbound from "@/stores/useCreateOutbound";

const Table = () => {
  const { createOutbound, updateCreateOutbound, saveCreateOutbound } =
    useCreateOutbound();

  const table = useReactTable({
    data: createOutbound,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: string, value: unknown) => {
        const updatedRow = {
          ...createOutbound[rowIndex],
          [columnId]: value,
        };
        updateCreateOutbound(rowIndex, updatedRow);
        saveCreateOutbound();
      },
    },
  });

  return (
    <div className="w-full h-220 px-4 overflow-y-auto">
      <table className="w-full ">
        <thead className="border-b-2 border-primary/10 h-14 sticky top-0 bg-white z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: header.getSize() }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="relative">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
