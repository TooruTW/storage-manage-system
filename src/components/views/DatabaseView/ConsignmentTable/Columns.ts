import { createColumnHelper } from "@tanstack/react-table";
import { Consignment } from "./type/dataType";
import EditableCell from "../shared/EditableCell";

const columnHelper = createColumnHelper<Consignment>();

const columns = [
  columnHelper.accessor("name", {
    cell: EditableCell,
    header: "客戶名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("product_name", {
    cell: EditableCell,
    header: "商品名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("unit", {
    cell: EditableCell,
    header: "單位",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("current_stock", {
    cell: EditableCell,
    header: "當前庫存量",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("last_update_date", {
    cell: EditableCell,
    header: "日期",
    enableColumnFilter: true, // 不允許過濾
  }),
];

export { columns };
