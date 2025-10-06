import { createColumnHelper } from "@tanstack/react-table";
import { CreateOutbound } from "../type";
import StringCell from "../Cell/SelecterCell";
import NumberCell from "../Cell/NumberCell";

const columnHelper = createColumnHelper<CreateOutbound>();

const columns = [
  columnHelper.accessor("customerName", {
    cell: StringCell,
    header: "客戶名",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("productName", {
    cell: StringCell,
    header: "商品名",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("unit", {
    cell: StringCell,
    header: "單位",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("costPerUnit", {
    cell: NumberCell,
    header: "單位成本",
    enableColumnFilter: false,
  }),

  columnHelper.accessor("pricePerUnit", {
    cell: NumberCell,
    header: "單位價格",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("quantity", {
    cell: NumberCell,
    header: "數量",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("totalPrice", {
    cell: NumberCell,
    header: "小計",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("netProfit", {
    cell: NumberCell,
    header: "損益",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("remark", {
    cell: StringCell,
    header: "備註",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("shipmentDate", {
    cell: StringCell,
    header: "出貨日期",
    enableColumnFilter: true,
  }),
];

export { columns };
