import ExampleTable from "../ExampleTable";
import { useParams } from "react-router-dom";
import { TABS_CONSTANTS } from "../Tabs/constants";

const CenterSection = () => {
  const { tab } = useParams();
  return (
    <div className="rounded-xl border border-primary/10 shadow-md w-full p-6">
      <div className=" flex justify-between items-center">
        <h2 className="text-h2 font-normal">{TABS_CONSTANTS.find((item) => item.id === tab)?.label}</h2>
        <div>
          <input type="Search" />
        </div>
      </div>
      <ExampleTable />
    </div>
  );
};

export default CenterSection;
