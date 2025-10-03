import { TABS_CONSTANTS } from "./constants";
import { useLocation, useNavigate } from "react-router-dom";

const Tabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // 從路徑中取得當前的 tab
  const currentTab = location.pathname.split("/").pop();

  return (
    <div
      className={`grid grid-cols-6 p-1 border-2 gap-2 rounded-md bg-primary/10 w-1/3`}
    >
      {TABS_CONSTANTS.map((item) => (
        <div
          key={item.id}
          className={`py-1 rounded-xl text-center px-2 flex items-center justify-center cursor-pointer ${
            currentTab === item.id &&
            "shadow-xs border-2 border-primary/10 bg-white"
          }`}
          onClick={() => navigate(`/database/${item.id}`)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
