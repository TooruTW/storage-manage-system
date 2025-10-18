import "@tanstack/react-table";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData> {
    updateData?: (rowIndex: number, columnId: string, value: unknown) => void;
    collectData?: (id: string, columnId: string, value: unknown) => void;
    isEditing?: boolean;
    originalData?: TData[]; // 添加原始資料到 meta
  }
}
