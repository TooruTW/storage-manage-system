import { Table } from "@tanstack/react-table";
import { Outbound } from "./dataType";

export type CellType = {
  getValue: () => string | number;
  row: { index: number };
  column: { id: string };
  table: Table<Outbound>;
};
