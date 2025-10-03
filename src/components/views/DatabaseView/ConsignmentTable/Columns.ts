import { createColumnHelper } from "@tanstack/react-table";
import { Consignment } from "./type/dataType";
import EditableCell from "./EditableCell";

const columnHelper = createColumnHelper<Consignment>();

const columns = [
  columnHelper.accessor("customerName", {
    cell: EditableCell,
    header: "客戶名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("productName", {
    cell: EditableCell,
    header: "商品名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("unit", {
    cell: EditableCell,
    header: "單位",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("currentStock", {
    cell: EditableCell,
    header: "當前庫存量",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("transactionQuantity", {
    cell: EditableCell,
    header: "進出庫數量",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("date", {
    cell: EditableCell,
    header: "日期",
    enableColumnFilter: true, // 不允許過濾
  }),
];

export { columns };
