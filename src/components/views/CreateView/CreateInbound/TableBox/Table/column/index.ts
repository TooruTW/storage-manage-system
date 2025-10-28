import { createColumnHelper } from "@tanstack/react-table";
import { CreateInbound } from "../../../type";
import NumberCell from "../Cell/NumberCell";
import MoneyCell from "../Cell/MoneyCell";
import CalcTotalCell from "../Cell/CalcTotalCell";
import ReadOnlyCell from "../Cell/ReadOnlyCell";
import DateCell from "../Cell/DateCell";
import DeleteCell from "../Cell/DeleteCell";
import StringCell from "../Cell/StringCell";

const columnHelper = createColumnHelper<CreateInbound>();

const columns = [
  columnHelper.accessor("supplier_name", {
    cell: ReadOnlyCell,
    header: "進貨商",
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
    cell: StringCell,
    header: "單位",
    enableColumnFilter: false,
    size: 50,
  }),
  columnHelper.accessor("quantity", {
    cell: NumberCell,
    header: "數量 ",
    enableColumnFilter: false,
    size: 50,
  }),
  columnHelper.accessor("price_per_unit", {
    cell: MoneyCell,
    header: "單價 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("total_price", {
    cell: CalcTotalCell,
    header: "小計 $",
    enableColumnFilter: false,
    size: 100,
  }),
  columnHelper.accessor("remark", {
    cell: StringCell,
    header: "備註",
    enableColumnFilter: true,
    size: 100,
  }),
  columnHelper.accessor("inbound_date", {
    cell: DateCell,
    header: "進貨日",
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
