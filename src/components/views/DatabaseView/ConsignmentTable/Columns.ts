import { createColumnHelper } from "@tanstack/react-table";
import { Consignment } from "./type/dataType";
import ReadOnlyCell from "../shared/ReadOnlyCell";
import EditableNumberCell from "../shared/EditableNumberCell";
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
    cell: EditableNumberCell,
    header: "當前庫存量",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("last_update_date", {
    cell: ReadOnlyCell,
    header: "日期",
    enableColumnFilter: true, 
  }),
];

export { columns };
