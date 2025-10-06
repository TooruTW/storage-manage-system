import { createColumnHelper } from "@tanstack/react-table";
import { CreateOutbound } from "../type";
import StringCell from "../Cell/StringCell";
import NumberCell from "../Cell/NumberCell";
import MoneyCell from "../Cell/MoneyCell";
import SelecterCell from "../Cell/SelecterCell";

const columnHelper = createColumnHelper<CreateOutbound>();

const columns = [
  columnHelper.accessor("customerName", {
    cell: StringCell,
    header: "客戶名",
    enableColumnFilter: true,
    size: 120,
  }),
  columnHelper.accessor("productName", {
    cell: StringCell,
    header: "商品名",
    enableColumnFilter: true,
    size: 200,
  }),
  columnHelper.accessor("unit", {
    cell: StringCell,
    header: "單位",
    enableColumnFilter: false,
    size: 50,
  }),
  columnHelper.accessor("costPerUnit", {
    cell: MoneyCell,
    header: "單位成本 $",
    enableColumnFilter: false,
    size: 100,
  }),

  columnHelper.accessor("pricePerUnit", {
    cell: MoneyCell,
    header: "單位價格 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("quantity", {
    cell: NumberCell,
    header: "數量",
    enableColumnFilter: false,
    size: 50,
  }),
  columnHelper.accessor("totalPrice", {
    cell: MoneyCell,
    header: "小計 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("netProfit", {
    cell: MoneyCell,
    header: "損益 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("remark", {
    cell: SelecterCell,
    header: "備註",
    enableColumnFilter: true,
    size: 100,
  }),
  columnHelper.accessor("shipmentDate", {
    cell: StringCell,
    header: "出貨日期",
    enableColumnFilter: true,
    size: 100,
  }),
];

export { columns };
