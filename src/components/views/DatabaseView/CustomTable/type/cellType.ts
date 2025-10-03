import { Table } from "@tanstack/react-table";
import { Custom } from "./dataType";

export type CellType = {
  getValue: () => string;
  row: { index: number };
  column: { id: string };
  table: Table<Custom>;
};
