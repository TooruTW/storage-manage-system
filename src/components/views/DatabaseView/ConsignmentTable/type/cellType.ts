import { Table } from "@tanstack/react-table";
import { Consignment } from "./dataType";

export type CellType = {
  getValue: () => string | number;
  row: { index: number };
  column: { id: string };
  table: Table<Consignment>;
};
