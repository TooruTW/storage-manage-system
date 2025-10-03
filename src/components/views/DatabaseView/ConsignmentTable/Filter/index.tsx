import { useState } from "react";
import { Column } from "@tanstack/react-table";
import { Consignment } from "../type/dataType";

const Filter = ({
  column,
}: {
  column: Column<Consignment, unknown>;
}) => {
  const columnFilterValue = column.getFilterValue();
  const [inputValue, setInputValue] = useState(
    (columnFilterValue ?? "") as string
  );

  const handleBlur = () => {
    column.setFilterValue(inputValue);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleBlur}
      placeholder={`搜尋...`}
      className="w-36 border shadow rounded px-4 py-1"
    />
  );
};

export { Filter };
