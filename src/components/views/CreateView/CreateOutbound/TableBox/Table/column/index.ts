import { createColumnHelper } from "@tanstack/react-table";
import { CreateOutbound } from "../type";
import NumberCell from "../Cell/NumberCell";
import MoneyCell from "../Cell/MoneyCell";
import SelecterCell from "../Cell/SelecterCell";
import CalcTotalCell from "../Cell/CalcTotalCell";
import ReadOnlyCell from "../Cell/ReadOnlyCell";
import CalcProfitCell from "../Cell/CalcProfit";
import DateCell from "../Cell/DateCell";

const columnHelper = createColumnHelper<CreateOutbound>();

const columns = [
  columnHelper.accessor("customerName", {
    cell: ReadOnlyCell,
    header: "客戶名",
    enableColumnFilter: true,
    size: 120,
  }),
  columnHelper.accessor("productName", {
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
    cell: CalcTotalCell,
    header: "小計 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("netProfit", {
    cell: CalcProfitCell,
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
    cell: DateCell,
    header: "出貨日期",
    enableColumnFilter: true,
    size: 100,
  }),
];

export { columns };
