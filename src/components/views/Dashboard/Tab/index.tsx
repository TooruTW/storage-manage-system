import { useCallback } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { TIME_RANGES } from "./constants";

const Tab = () => {
  const { timeRange } = useParams();
  const navigate = useNavigate();
  const switchTimeRange = (timeRange: "month" | "quarter" | "year") => {
    const currentPath = location.pathname.split("/");
    currentPath[2] = timeRange;
    const newPath = currentPath.join("/");
    navigate(newPath);
  };

  const activityStyle = useCallback(
    (range: "month" | "quarter" | "year") => {
      const activeStyle = "bg-primary-foreground shadow-xs";
      if (timeRange === range) {
        return activeStyle;
      }
    },
    [timeRange]
  );
  return (
    <div className="flex gap-2 w-fit p-1 border-2 rounded-md bg-primary/10">
      {TIME_RANGES.map((item) => (
        <div
          key={item.id}
          className={`rounded-md px-3 py-2 border-2 hover:bg-primary-foreground cursor-pointer 
            ${activityStyle(item.id)}`}
          onClick={() => switchTimeRange(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
