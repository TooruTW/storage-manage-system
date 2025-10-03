import { createColumnHelper } from "@tanstack/react-table";
import { Inbound } from "./type/dataType";
import EditableCell from "./EditableCell";

const columnHelper = createColumnHelper<Inbound>();

const columns = [
  columnHelper.accessor("productName", {
    cell: EditableCell,
    header: "商品名",
    enableColumnFilter: true, 
  }),
  columnHelper.accessor("supplierName", {
    cell: EditableCell,
    header: "進貨商",
    enableColumnFilter: true, 
  }),
  columnHelper.accessor("unit", {
    cell: EditableCell,
    header: "單位",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("quantity", {
    cell: EditableCell,
    header: "數量",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("price", {
    cell: EditableCell,
    header: "單價",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("lastInboundDate", {
    cell: EditableCell,
    header: "最後進貨日",
    enableColumnFilter: true, 
  }),
];

export { columns };
