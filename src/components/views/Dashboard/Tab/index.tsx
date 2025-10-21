import { useNavigate, useParams } from "react-router-dom";

import { TIME_RANGE_CONSTANTS } from "./constants";

const Tab = () => {
  const { timeRange } = useParams();
  const navigate = useNavigate();
  const switchTimeRange = (timeRange: "month" | "quarter" | "year") => {
    const currentPath = location.pathname.split("/");
    currentPath[2] = timeRange;
    const newPath = currentPath.join("/");
    navigate(newPath);
  };
  return (
    <div
      className={`grid grid-cols-${TIME_RANGE_CONSTANTS.length} gap-2 w-fit p-1 border-2 rounded-md bg-primary/10`}
    >
      {TIME_RANGE_CONSTANTS.map((item) => (
        <div
          key={item.id}
          className={`rounded-md px-3 py-2 border-2 ${
            timeRange === item.id && "bg-primary-foreground shadow-xs"
          } hover:bg-primary-foreground cursor-pointer `}
          onClick={() => switchTimeRange(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
