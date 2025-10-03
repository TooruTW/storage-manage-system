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
import { Filter } from "../shared";
import { Button } from "@/components/ui/button";

const ConsignmentTable = () => {
  const [data, setData] = useState(() => FAKE_DATA);
  const [isEditing, setIsEditing] = useState(false);

  // 表格設定及其額外功能
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
    <div
      className={`w-full flex flex-col gap-4 ${isEditing && "bg-primary/10"}`}
    >
      <div className="flex justify-between items-center mt-4">
        <div>共 {table.getRowModel().rows.length} 筆資料</div>
        <Button
          className="active:scale-95 transition-all"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "完成" : "編輯"}
        </Button>
      </div>
      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-full">
          <thead className="w-full">
            {/* Header 組合 */}
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {/* Header 組合內的 Header */}
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder ? null : (
                        <div className="flex justify-center items-center gap-4">
                          {/* Header 內容 */}
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {/* 過濾器 */}
                          {header.column.getCanFilter() ? (
                            <div>
                              <Filter column={header.column} />
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
          {/* 表格內容 */}
          <tbody className="w-full">
            {/* 表格內容的空行 */}
            <tr>
              <td colSpan={4} className="h-8"></td>
            </tr>
            {/* 表格內容的行 */}
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {/* 表格內容的行內的單元格 */}
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className={`${
                          isEditing ? "border-2" : "border-y-2"
                        }  border-primary/10 `}
                      >
                        {/* 單元格內容 */}
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
      </div>
    </div>
  );
};

export default ConsignmentTable;
