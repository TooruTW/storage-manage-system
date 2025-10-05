import Tab from "./Tab";
import { Outlet } from "react-router-dom";

const CreateView = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-7 shadow-xs">
      <Tab />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CreateView;
