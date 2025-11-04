import { createColumnHelper } from "@tanstack/react-table";
import { Outbound } from "./type/dataType";
import { ReadOnlyCell, DeleteCell } from "../shared";

const columnHelper = createColumnHelper<Outbound>();

const columns = [
  columnHelper.accessor("customer_name", {
    cell: ReadOnlyCell,
    header: "客戶名",
    enableColumnFilter: true,
    size: 120,
  }),
  columnHelper.accessor("product_name", {
    cell: ReadOnlyCell,
    header: "商品名",
    enableColumnFilter: true,
    size: 200,
  }),

  columnHelper.accessor("unit", {
    cell: ReadOnlyCell,
    header: "單位",
    enableColumnFilter: false,
    size: 50,
  }),
  columnHelper.accessor("cost_per_unit", {
    cell: ReadOnlyCell,
    header: "單成本",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("quantity", {
    cell: ReadOnlyCell,
    header: "數量",
    enableColumnFilter: false,
    size: 70,
  }),
  columnHelper.accessor("price_per_unit", {
    cell: ReadOnlyCell,
    header: "單價",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("shipment_date", {
    cell: ReadOnlyCell,
    header: "出貨日",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("total_price", {
    cell: ReadOnlyCell,
    header: "總價",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("net_profit", {
    cell: ReadOnlyCell,
    header: "損益",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("remark", {
    cell: ReadOnlyCell,
    header: "備註",
    enableColumnFilter: true,
  }),
  columnHelper.display({
    id: "actions",
    cell: DeleteCell,
    header: "刪除",
    enableHiding: true,
  }),
];

export { columns };
