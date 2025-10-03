import { createColumnHelper } from "@tanstack/react-table";
import { Supplier } from "./type/dataType";
import EditableCell from "./EditableCell";

const columnHelper = createColumnHelper<Supplier>();

const columns = [
  columnHelper.accessor("supplierName", {
    cell: EditableCell,
    header: "供應商名稱",
    enableColumnFilter: true, 
  }),
  columnHelper.accessor("supplierContactPerson", {
    cell: EditableCell,
    header: "供應商聯絡人",
    enableColumnFilter: true, 
  }),
  columnHelper.accessor("supplierLandlinePhone", {
    cell: EditableCell,
    header: "供應商市話",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("supplierMobilePhone", {
    cell: EditableCell,
    header: "供應商手機",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("supplierAddress", {
    cell: EditableCell,
    header: "供應商地址",
    enableColumnFilter: false, 
  }),
  columnHelper.accessor("supplierRemark", {
    cell: EditableCell,
    header: "供應商備註",
    enableColumnFilter: true, 
  }),
];

export { columns };
