import { Outlet } from "react-router-dom";

import Tab from "./Tab";

const CreateView = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 shadow-xs py-5">
      <Tab />
      <Outlet />
    </div>
  );
};

export default CreateView;
