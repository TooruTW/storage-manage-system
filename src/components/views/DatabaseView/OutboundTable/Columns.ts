import { createColumnHelper } from "@tanstack/react-table";
import { Outbound } from "./type/dataType";
import { ReadOnlyCell, DeleteCell } from "../shared";

const columnHelper = createColumnHelper<Outbound>();

const columns = [
  columnHelper.accessor("name", {
    cell: ReadOnlyCell,
    header: "客戶名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("product_name", {
    cell: ReadOnlyCell,
    header: "商品名",
    enableColumnFilter: true, // 允許過濾
  }),

  columnHelper.accessor("unit", {
    cell: ReadOnlyCell,
    header: "單位",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("cost_per_unit", {
    cell: ReadOnlyCell,
    header: "單成本",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("quantity", {
    cell: ReadOnlyCell,
    header: "數量",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("price_per_unit", {
    cell: ReadOnlyCell,
    header: "單價",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("shipment_date", {
    cell: ReadOnlyCell,
    header: "出貨日",
    enableColumnFilter: true, // 不允許過濾
  }),
  columnHelper.accessor("total_price", {
    cell: ReadOnlyCell,
    header: "總價",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("net_profit", {
    cell: ReadOnlyCell,
    header: "損益",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("remark", {
    cell: ReadOnlyCell,
    header: "備註",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.display({
    id: "actions",
    cell: DeleteCell,
    header: "刪除",
    enableHiding: true, // 允許此欄位被隱藏
  }),
];

export { columns };
