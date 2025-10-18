import { createColumnHelper } from "@tanstack/react-table";
import { Inbound } from "./type/dataType";
import { ReadOnlyCell, DeleteCell } from "../shared";

const columnHelper = createColumnHelper<Inbound>();

const columns = [
  columnHelper.accessor("product_name", {
    cell: ReadOnlyCell,
    header: "商品名",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("supplier_name", {
    cell: ReadOnlyCell,
    header: "進貨商",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("unit", {
    cell: ReadOnlyCell,
    header: "單位",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("quantity", {
    cell: ReadOnlyCell,
    header: "數量",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("price_per_unit", {
    cell: ReadOnlyCell,
    header: "單價",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("inbound_date", {
    cell: ReadOnlyCell,
    header: "最後進貨日",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("remark", {
    cell: ReadOnlyCell,
    header: "備註",
    enableColumnFilter: false,
  }),
  columnHelper.display({
    id: "actions",
    cell: DeleteCell,
    header: "刪除",
    enableHiding: true, // 允許此欄位被隱藏
  }),
];

export { columns };
