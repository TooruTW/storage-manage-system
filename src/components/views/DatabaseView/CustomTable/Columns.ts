import { createColumnHelper } from "@tanstack/react-table";
import { Custom } from "./type/dataType";
import EditableCell from "../shared/EditableCell";

const columnHelper = createColumnHelper<Custom>();

const columns = [
  columnHelper.accessor("storeName", {
    cell: EditableCell,
    header: "店名",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("contactPerson", {
    cell: EditableCell,
    header: "聯絡人",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("landlinePhone", {
    cell: EditableCell,
    header: "市話",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("mobilePhone", {
    cell: EditableCell,
    header: "手機",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("address", {
    cell: EditableCell,
    header: "地址",
    enableColumnFilter: false,
  }),
];

export { columns };
