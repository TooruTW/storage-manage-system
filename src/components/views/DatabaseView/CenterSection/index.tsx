// import ExampleTable from "../ExampleTable";
import { useParams } from "react-router-dom";
import { TABS_CONSTANTS } from "../Tabs/constants";
import InventoryTable from "../InventoryTable";

const CenterSection = () => {
  const { tab } = useParams();
  return (
    <div className="rounded-xl border border-primary/10 shadow-md w-full p-6 h-full flex flex-col overflow-hidden">
      <div className=" flex justify-between items-center mb-4">
        <h2 className="text-h2 font-normal">
          {TABS_CONSTANTS.find((item) => item.id === tab)?.label}
        </h2>
      </div>
      {/* <ExampleTable /> */}
      <div className="flex-1 overflow-y-auto">
        <InventoryTable />
      </div>
    </div>
  );
};

export default CenterSection;
