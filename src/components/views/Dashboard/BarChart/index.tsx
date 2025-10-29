import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetDashboardData from "../hook/useGetDashboardData";
import {
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { TimeRange, Category } from "../hook/useGetDashboardData";

const BarChart = () => {
  const { timeRange, category } = useParams();
  const [timeRangeText, setTimeRangeText] = useState("");
  const [categoryText, setCategoryText] = useState("");

  useEffect(() => {
    setTimeRangeText(
      timeRange === "month" ? "月度" : "季度" 
    );
    setCategoryText(category === "profitAmount" ? "損益額" : "營業額");
  }, [timeRange, category]);

  const { result } = useGetDashboardData(
    timeRange as TimeRange,
    category as Category
  );

  return (
    <div className="w-full h-140 flex flex-col gap-6 border-2 rounded-md p-6 shadow-xs">
      <p className="text-paragraph text-primary/80">
        {timeRangeText} {categoryText}
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart width={1000} height={1000} data={result}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `$ ${value}`}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="var(--color-primary)"
            radius={[8, 8, 0, 0]}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
