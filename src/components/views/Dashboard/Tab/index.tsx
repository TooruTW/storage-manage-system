import { useNavigate, useParams } from "react-router-dom";
import { TIME_RANGE_CONSTANTS } from "./constants";


const Tab = () => {
  const { timeRange } = useParams();
  const navigate = useNavigate();
  return (
    <div
      className={`grid grid-cols-${TIME_RANGE_CONSTANTS.length} gap-2 w-fit p-1 border-2 rounded-md bg-primary/10`}
    >
      {TIME_RANGE_CONSTANTS.map((item) => (
        <div
          key={item.id}
          className={`rounded-md px-3 py-2 border-2 ${
            timeRange === item.id && "bg-primary-foreground"
          } hover:bg-primary-foreground box-shadow-md cursor-pointer `}
          onClick={() => navigate(`/dashboard/${item.id}`)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
