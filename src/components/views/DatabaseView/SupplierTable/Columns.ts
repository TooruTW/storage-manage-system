import { createColumnHelper } from "@tanstack/react-table";
import { Supplier } from "./type/dataType";
import { EditableCell } from "../shared";

const columnHelper = createColumnHelper<Supplier>();

const columns = [
  columnHelper.accessor("name", {
    cell: EditableCell,
    header: "供應商名稱",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("contact_person", {
    cell: EditableCell,
    header: "供應商聯絡人",
    enableColumnFilter: true,
  }),
  columnHelper.accessor("landline_phone", {
    cell: EditableCell,
    header: "供應商市話",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("mobile_phone", {
    cell: EditableCell,
    header: "供應商手機",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("address", {
    cell: EditableCell,
    header: "供應商地址",
    enableColumnFilter: false,
  }),
  columnHelper.accessor("remark", {
    cell: EditableCell,
    header: "供應商備註",
    enableColumnFilter: true,
  }),
];

export { columns };
