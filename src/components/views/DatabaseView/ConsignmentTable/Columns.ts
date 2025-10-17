import { createColumnHelper } from "@tanstack/react-table";
import { Consignment } from "./type/dataType";
import EditableCell from "../shared/EditableCell";
import ReadOnlyCell from "../shared/ReadOnlyCell";
const columnHelper = createColumnHelper<Consignment>();

const columns = [
  columnHelper.accessor("name", {
    cell: ReadOnlyCell,
    header: "客戶名",
    enableColumnFilter: true, 
  }),
  columnHelper.accessor("product_name", {
    cell: ReadOnlyCell,
    header: "商品名",
    enableColumnFilter: true, 
  }),
  columnHelper.accessor("unit", {
    cell: ReadOnlyCell,
    header: "單位",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("current_stock", {
    cell: EditableCell,
    header: "當前庫存量",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("last_update_date", {
    cell: EditableCell,
    header: "日期",
    enableColumnFilter: true, 
  }),
];

export { columns };
