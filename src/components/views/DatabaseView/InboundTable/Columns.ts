import { createColumnHelper } from "@tanstack/react-table";
import { Inbound } from "./type/dataType";
import EditableCell from "../shared/EditableCell";

const columnHelper = createColumnHelper<Inbound>();

const columns = [
  columnHelper.accessor("product_name", {
    cell: EditableCell,
    header: "商品名",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("supplier_name", {
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
  columnHelper.accessor("price_per_unit", {
    cell: EditableCell,
    header: "單價",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("inbound_date", {
    cell: EditableCell,
    header: "最後進貨日",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("remark", {
    cell: EditableCell,
    header: "備註",
    enableColumnFilter: false,
  }),
];

export { columns };
