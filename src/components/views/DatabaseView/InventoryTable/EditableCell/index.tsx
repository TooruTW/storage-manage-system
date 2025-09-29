import { useState, useEffect } from "react";
import { CellType } from "../type/cellType";


// Give our default column cell renderer editing superpowers!
const EditableCell = ({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellType) => {
  const initialValue = getValue();
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      value={value as string}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      className="w-full text-center"
    />
  );
};

export default EditableCell;
