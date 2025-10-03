import { Table } from "@tanstack/react-table";
import { Supplier } from "./dataType";

export type CellType = {
  getValue: () => string;
  row: { index: number };
  column: { id: string };
  table: Table<Supplier>;
};
