import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Filter } from "../Filter";
import { EditDataMap } from "@/components/views/DatabaseView/shared/types/EditDataMap";
import { usePopupStore } from "@/stores/usePopupStore";
import UpdateConfirm from "../UpdateConfirm";

interface BaseTableProps<TData> {
  data: TData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  updateData?: (data: EditDataMap) => void;
  deleteData?: (id: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BaseTable = <TData extends Record<string, any>>({
  data: initialData,
  columns,
  updateData,
}: BaseTableProps<TData>) => {
  const [data, setData] = useState(() => initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState<EditDataMap>(new Map());
  const [originalData] = useState<TData[]>(initialData); // 保存原始資料
  const { setContent } = usePopupStore();

  // 表格設定及其額外功能
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // Provide our updateData function to our table meta
    meta: {
      collectData: (id: string, columnId: string, value: unknown) => {
        if (newData.has(id)) {
          newData.get(id)?.set(columnId, value);
        } else {
          newData.set(id, new Map([[columnId, value]]));
        }
        setNewData(new Map(newData));
      },
      updateData: (rowIndex, columnId, value) => {
        console.log("updateData", rowIndex, columnId, value);
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
      originalData, // 將原始資料放入 meta，供各個 cell 訪問
    },
  });

  const showConfirmUpdate = () => {
    setContent(
      <UpdateConfirm
        warningContent="確定要將資料修改為以下內容嗎？"
        onConfirm={() => {
          updateData?.(newData); // 更新資料
          setNewData(new Map()); // 清空新資料
          setIsEditing(false); // 退出編輯模式
        }}
      />
    );
  };

  const showConfirmReset = () => {
    setContent(
      <UpdateConfirm
        warningContent="確定要重置資料嗎？"
        onConfirm={() => {
          setData(originalData); // 重置資料
          setNewData(new Map()); // 清空新資料
          setIsEditing(false); // 退出編輯模式
        }}
      />
    );
  };

  return (
    <div
      className={`w-full flex flex-col gap-4 ${isEditing && "bg-primary/10"}`}
    >
      <div className="flex justify-between items-center mt-4">
        <div>共 {table.getRowModel().rows.length} 筆資料</div>
        <div className="flex gap-2">
          {!isEditing && (
            <Button
              className="active:scale-95 transition-all"
              onClick={() => setIsEditing(true)}
            >
              編輯
            </Button>
          )}
          {isEditing && (
            <Button
              className="active:scale-95 transition-all"
              onClick={showConfirmReset}
            >
              重置資料
            </Button>
          )}
          {isEditing && (
            <Button
              className="active:scale-95 transition-all"
              onClick={showConfirmUpdate}
            >
              確認修改
            </Button>
          )}
        </div>
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
                        <div className="flex flex-col justify-center items-center gap-1">
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
              <td colSpan={columns.length} className="h-8"></td>
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

export default BaseTable;
