import { Table } from "@tanstack/react-table";
import { Inventory } from "./dataType";

export type CellType = {
  getValue: () => string;
  row: { index: number };
  column: { id: string };
  table: Table<Inventory>;
};
