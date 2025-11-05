import { createColumnHelper } from "@tanstack/react-table";
import { Customer } from "./type/dataType";
import {EditableCell} from "../shared";

const columnHelper = createColumnHelper<Customer>();

const columns = [
  columnHelper.accessor("name", {
    cell: EditableCell,
    header: "店名",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("contact_person", {
    cell: EditableCell,
    header: "聯絡人",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("landline_phone", {
    cell: EditableCell,
    header: "市話",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("mobile_phone", {
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
