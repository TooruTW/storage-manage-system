import { createColumnHelper, ColumnDef } from "@tanstack/react-table";
import { Person } from "./type/dataType";
import EditableCell from "../shared/EditableCell";

const columnHelper = createColumnHelper<Person>();

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "Name",
    header: "Name",
    columns: [
      columnHelper.accessor("firstName", {
        cell: EditableCell,
      }),
      columnHelper.accessor("lastName", {
        cell: EditableCell,
      }),
    ],
  },
  {
    accessorKey: "Info",
    header: "Info",
    columns: [
      columnHelper.accessor("age", {
        cell: EditableCell,
      }),
      columnHelper.accessor("visits", {
        cell: EditableCell,
      }),
      columnHelper.accessor("status", {
        cell: EditableCell,
      }),
      columnHelper.accessor("progress", {
        cell: EditableCell,
      }),
    ],
  },
];

export { columns };
