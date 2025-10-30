import { createColumnHelper } from "@tanstack/react-table";
import { CreateOutbound } from "../../../type";
import NumberCell from "../Cell/NumberCell";
import MoneyCell from "../Cell/MoneyCell";
import SelectorCell from "../Cell/SelectorCell";
import CalcTotalCell from "../Cell/CalcTotalCell";
import ReadOnlyCell from "../Cell/ReadOnlyCell";
import CalcProfitCell from "../Cell/CalcProfit";
import DateCell from "../Cell/DateCell";
import DeleteCell from "../Cell/DeleteCell";

const columnHelper = createColumnHelper<CreateOutbound>();

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
    cell: MoneyCell,
    header: "單位成本 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("price_per_unit", {
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
  columnHelper.accessor("total_price", {
    cell: CalcTotalCell,
    header: "小計 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("net_profit", {
    cell: CalcProfitCell,
    header: "損益 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("remark", {
    cell: SelectorCell,
    header: "備註",
    enableColumnFilter: true,
    size: 100,
  }),
  columnHelper.accessor("shipment_date", {
    cell: DateCell,
    header: "出貨日期",
    enableColumnFilter: true,
    size: 100,
  }),
  columnHelper.display({
    id: "actions",
    cell: DeleteCell,
    header: "刪除",
    size: 80,
  }),
];

export { columns };
