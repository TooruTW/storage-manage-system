import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CREATE_TAB } from "./constants";

const Tab = () => {
  const location = useLocation();
  const createTab = location.pathname.split("/").pop();
  const navigate = useNavigate();
  const switchCreateTab = (createTab: "outbound" | "inbound") => {
    const currentPath = location.pathname.split("/");
    currentPath[2] = createTab;
    const newPath = currentPath.join("/");
    navigate(newPath);
  };

  const activeStyle = useCallback(
    (id: "outbound" | "inbound") => {
      const style = "bg-primary-foreground shadow-xs";
      return createTab === id && style;
    },
    [createTab]
  );

  return (
    <div className="grid grid-cols-2 gap-2 p-1 border-2 rounded-md bg-primary/10 w-fit">
      {CREATE_TAB.map((item) => (
        <div
          key={item.id}
          className={`rounded-md px-3 py-1 border-2 text-center 
          hover:bg-primary-foreground cursor-pointer ${activeStyle(item.id)} `}
          onClick={() => switchCreateTab(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
