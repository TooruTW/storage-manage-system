import { createColumnHelper } from "@tanstack/react-table";
import { Inventory } from "./type/dataType";
import EditableCell from "./EditableCell";

const columnHelper = createColumnHelper<Inventory>();

const columns = [
  columnHelper.accessor("productName", {
    cell: EditableCell,
    header: "商品名",
  }),
  columnHelper.accessor("unit", {
    cell: EditableCell,
    header: "單位",
  }),
  columnHelper.accessor("quantity", {
    cell: EditableCell,
    header: "數量",
  }),
  columnHelper.accessor("lastInboundDate", {
    cell: EditableCell,
    header: "最後進貨日",
  }),
];

export { columns };
