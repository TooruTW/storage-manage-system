import { FAKE_DATA } from "./constants/data";
import { columns } from "./Columns";
import { BaseTable } from "../shared";

const SupplierTable = () => {
  return <BaseTable data={FAKE_DATA} columns={columns} />;
};

export default SupplierTable;
