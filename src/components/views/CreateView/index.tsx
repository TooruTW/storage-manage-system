import Tab from "./Tab";
import { Outlet } from "react-router-dom";

const CreateView = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-4 shadow-xs py-5 max-h-240">
      <Tab />
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default CreateView;
