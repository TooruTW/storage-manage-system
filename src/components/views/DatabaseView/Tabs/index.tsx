import { TABS_CONSTANTS } from "./constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Tabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // 從路徑中取得當前的 tab
  const currentTab = location.pathname.split("/").pop();

  const activeStyle = useCallback(
    (id: string) => {
      const style = "shadow-xs outline-1 outline-primary/10 bg-white";
      return currentTab === id && style;
    },
    [currentTab]
  );

  const switchTab = (id: string) => {
    navigate(`/database/${id}`);
  };

  return (
    <div className="grid grid-cols-6 p-1 border-2 gap-2 rounded-md bg-primary/10 w-fit">
      {TABS_CONSTANTS.map((item) => (
        <div
          key={item.id}
          className={`py-1 rounded-md text-center px-2 flex items-center justify-center cursor-pointer 
            ${activeStyle(item.id)}`}
          onClick={() => switchTab(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
