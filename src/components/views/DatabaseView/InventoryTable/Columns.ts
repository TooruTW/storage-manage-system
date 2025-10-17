import { createColumnHelper } from "@tanstack/react-table";
import { Inventory } from "./type/dataType";
import { EditableNumberCell, ReadOnlyCell } from "../shared";

const columnHelper = createColumnHelper<Inventory>();

const columns = [
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
  columnHelper.accessor("quantity", {
    cell: EditableNumberCell,
    header: "數量",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("last_inbound_date", {
    cell: ReadOnlyCell,
    header: "最後進貨日",
    enableColumnFilter: true, 
  }),
];

export { columns };
