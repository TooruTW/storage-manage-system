// import ExampleTable from "../ExampleTable";
import { Outlet, useLocation } from "react-router-dom";
import { TABS_CONSTANTS } from "../Tabs/constants";

const CenterSection = () => {
  const location = useLocation();
  // 從路徑中取得當前的 tab，例如 /database/inventory -> inventory
  const currentTab = location.pathname.split("/").pop();

  return (
    <div className="rounded-xl border border-primary/10 shadow-md w-full p-6 h-full flex flex-col overflow-hidden">
      <div className=" flex justify-between items-center mb-4">
        <h2 className="text-h2 font-normal">
          {TABS_CONSTANTS.find((item) => item.id === currentTab)?.label}
        </h2>
      </div>
      {/* <ExampleTable /> */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default CenterSection;
