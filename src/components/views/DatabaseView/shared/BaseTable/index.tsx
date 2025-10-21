import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
  VisibilityState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { Filter } from "../Filter";
import UpdateConfirm from "../UpdateConfirm";

import { usePopupStore } from "@/stores/usePopupStore";

import { EditDataMap } from "@/components/views/DatabaseView/shared/types/EditDataMap";

interface BaseTableProps<TData> {
  data: TData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  updateDataToServer?: (data: EditDataMap) => void;
  deleteDataToServer?: (ids: string[]) => void;
}

const BaseTable = <TData extends Record<string, unknown>>({
  data: initialData,
  columns,
  updateDataToServer,
  deleteDataToServer,
}: BaseTableProps<TData>) => {
  const [data, setData] = useState(() => initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState<EditDataMap>(new Map());
  const [deletedData, setDeletedData] = useState<string[]>([]);
  const [originalData] = useState<TData[]>(initialData); // 保存原始資料
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    actions: false, // 預設隱藏刪除欄位
  });
  const { setContent } = usePopupStore();

  // 根據 isEditing 狀態控制刪除欄位的顯示/隱藏
  useEffect(() => {
    setColumnVisibility({
      actions: isEditing, // 只在編輯模式下顯示刪除欄位
    });
  }, [isEditing]);

  // 表格設定及其額外功能
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility, // 加入欄位可見性狀態
    },
    onColumnVisibilityChange: setColumnVisibility,
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
      deleteData: (id: string) => {
        setDeletedData((old) => [...old, id]);
        setData((old) => old.filter((row) => row.id !== id));
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
          updateDataToServer?.(newData); // 更新資料
          deleteDataToServer?.(deletedData); // 刪除資料
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
