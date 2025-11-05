import { useEffect, useMemo, useRef, useState } from "react";

import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";

import { Filter } from "../Filter";
import ScrollTopBtn from "../ScrollTopBtn";
import UpdateConfirm from "../UpdateConfirm";

import { TableActions } from "./TableActions";

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

  // 虛擬化相關 ref
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const rowHeight = 40; // 每行的高度（根據實際樣式調整）

  const editingStyle = useMemo(() => {
    return isEditing ? "bg-primary/10" : "";
  }, [isEditing]);
  const tableDataStyle = useMemo(() => {
    if (isEditing) {
      return "border-2";
    }
    return "border-y-2";
  }, [isEditing]);

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

  const handleShowConfirmUpdate = () => {
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

  const handleShowConfirmReset = () => {
    setContent(
      <UpdateConfirm
        warningContent="確定要取消編輯嗎？"
        onConfirm={() => {
          setData(originalData); // 取消編輯
          setNewData(new Map()); // 清空新資料
          setIsEditing(false); // 退出編輯模式
        }}
      />
    );
  };

  const filters = table.getState().columnFilters;

  const hasFilter = useMemo(() => {
    return filters.length > 0;
  }, [filters]);

  const handleClearFilter = () => {
    table.resetColumnFilters();
  };

  // 虛擬化設定
  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => rowHeight,
    overscan: 5, // 預渲染的行數
  });

  return (
    <div className={`w-full flex flex-col rounded-md gap-4 ${editingStyle}`}>
      {/* 操作區 */}
      <TableActions
        totalRows={table.getRowModel().rows.length}
        hasFilter={hasFilter}
        isEditing={isEditing}
        onClearFilter={handleClearFilter}
        onEdit={() => setIsEditing(true)}
        onReset={handleShowConfirmReset}
        onUpdate={handleShowConfirmUpdate}
      />
      {/* 表格 */}
      <div
        ref={tableContainerRef}
        className="h-[70vh] overflow-auto rounded-md"
        style={{ contain: "strict" }}
      >
        <table className="w-full border-collapse min-w-full">
          {/* 表格標題 */}
          <thead className="w-full sticky top-0 z-10 backdrop-blur-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="border-primary/10 "
                      style={
                        header.column.columnDef.size
                          ? { width: `${header.getSize()}px` }
                          : undefined
                      }
                    >
                      {header.isPlaceholder ? null : (
                        <div className="flex flex-col justify-center items-center py-2">
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
          {/* 虛擬化的表格內容 */}
          <tbody>
            {rows.length > 0 ? (
              <>
                {/* 表格內容的空行 */}
                <tr>
                  <td colSpan={columns.length} className="h-8"></td>
                </tr>
                {/* 上方填充空間 */}
                {rowVirtualizer.getVirtualItems().length > 0 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      style={{
                        height: `${
                          rowVirtualizer.getVirtualItems()[0]?.start ?? 0
                        }px`,
                        padding: 0,
                        border: "none",
                      }}
                    />
                  </tr>
                )}
                {/* 渲染可見的行 */}
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                  const row = rows[virtualRow.index];
                  if (!row) return null;
                  return (
                    <tr
                      key={row.id}
                      className="border-primary/10"
                      style={{
                        height: `${virtualRow.size}px`,
                      }}
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className={`border-primary/10 ${tableDataStyle}`}
                            style={
                              cell.column.columnDef.size
                                ? { width: `${cell.column.getSize()}px` }
                                : undefined
                            }
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
                {/* 下方填充空間 */}
                {rowVirtualizer.getVirtualItems().length > 0 && (
                  <tr>
                    <td
                      colSpan={columns.length}
                      style={{
                        height: `${
                          rowVirtualizer.getTotalSize() -
                          (rowVirtualizer.getVirtualItems()[
                            rowVirtualizer.getVirtualItems().length - 1
                          ]?.end ?? rowVirtualizer.getTotalSize())
                        }px`,
                        padding: 0,
                        border: "none",
                      }}
                    />
                  </tr>
                )}
              </>
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-8"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ScrollTopBtn targetRef={tableContainerRef} />
    </div>
  );
};

export default BaseTable;
