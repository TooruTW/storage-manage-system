import { createColumnHelper } from "@tanstack/react-table";
import { Inventory } from "./type/dataType";
import { EditableCell } from "../shared";

const columnHelper = createColumnHelper<Inventory>();

const columns = [
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
  columnHelper.accessor("quantity", {
    cell: EditableCell,
    header: "數量",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("last_inbound_date", {
    cell: EditableCell,
    header: "最後進貨日",
    enableColumnFilter: true, // 不允許過濾
  }),
];

export { columns };
