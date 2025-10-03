import { Column } from "@tanstack/react-table";
import { Inventory } from "../type/dataType";

const Filter = ({
  column,
}: {
  column: Column<Inventory, unknown>;
}) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <input
      type="text"
      value={(columnFilterValue ?? "") as string}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`搜尋...`}
      className="w-36 border shadow rounded px-4 py-1"
    />
  );
};

export { Filter };
