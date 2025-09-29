import { useState } from "react";
//
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import { FAKE_DATA } from "./constants/data";
import { columns } from "./Columns";
import { Filter } from "./Filter";
import { Button } from "@/components/ui/button";

const InventoryTable = () => {
  const [data, setData] = useState(() => FAKE_DATA);
  const [isEditing, setIsEditing] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // Provide our updateData function to our table meta
    meta: {
      updateData: (rowIndex, columnId, value) => {
        // Skip page index reset until after next rerender
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex]!,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
      isEditing,
    },
  });

  return (
    <div className=" w-full">
      <table className="w-full border-collapse ">
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div className="flex justify-center items-center gap-4">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="w-full">
          <tr>
            <td colSpan={4} className="h-8"></td>
          </tr>
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className={`${
                        isEditing ? "border-2" : "border-y-2"
                      }  border-primary/10 `}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div>共 {table.getRowModel().rows.length} 筆資料</div>
        <Button
          className="active:scale-95 transition-all"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "完成" : "編輯"}
        </Button>
      </div>
    </div>
  );
};

export default InventoryTable;
