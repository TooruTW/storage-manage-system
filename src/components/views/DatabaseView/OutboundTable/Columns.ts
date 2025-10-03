import { createColumnHelper } from "@tanstack/react-table";
import { Outbound } from "./type/dataType";
import EditableCell from "./EditableCell";

const columnHelper = createColumnHelper<Outbound>();

const columns = [
  columnHelper.accessor("productName", {
    cell: EditableCell,
    header: "商品名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("customerName", {
    cell: EditableCell,
    header: "客戶名",
    enableColumnFilter: true, // 允許過濾
  }),
  columnHelper.accessor("unit", {
    cell: EditableCell,
    header: "單位",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("costPerUnit", {
    cell: EditableCell,
    header: "單成本",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("quantity", {
    cell: EditableCell,
    header: "數量",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("pricePerUnit", {
    cell: EditableCell,
    header: "單價",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("shipmentDate", {
    cell: EditableCell,
    header: "出貨日",
    enableColumnFilter: true, // 不允許過濾
  }),
  columnHelper.accessor("totalPrice", {
    cell: EditableCell,
    header: "總價",
    enableColumnFilter: false, // 不允許過濾
  }),
  columnHelper.accessor("netProfit", {
    cell: EditableCell,
    header: "損益",
    enableColumnFilter: false, // 允許過濾
  }),
  columnHelper.accessor("remark", {
    cell: EditableCell,
    header: "備註",
    enableColumnFilter: true, // 允許過濾
  }),
];

export { columns };
