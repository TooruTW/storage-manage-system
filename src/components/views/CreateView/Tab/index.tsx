import { useNavigate, useLocation } from "react-router-dom";
import { CREATE_TAB_CONSTANTS } from "./constants";


const Tab = () => {
  const location = useLocation();
  const createTab = location.pathname.split("/").pop();
  const navigate = useNavigate();
  const switchCreateTab = (createTab: "outbound" | "inbound" | "customer" | "supplier") => {
    const currentPath = location.pathname.split("/");
    currentPath[2] = createTab;
    const newPath = currentPath.join("/");
    navigate(newPath);
  };
  return (
    <div
      className={`grid grid-cols-4 gap-2 p-1 border-2 rounded-md bg-primary/10 w-fit`}
    >
      {CREATE_TAB_CONSTANTS.map((item) => (
        <div
          key={item.id}
          className={`rounded-md px-3 py-1 border-2 text-center ${
              createTab === item.id && "bg-primary-foreground shadow-xs"
          } hover:bg-primary-foreground cursor-pointer `}
          onClick={() => switchCreateTab(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
