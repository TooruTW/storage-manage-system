import {
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const FAKE_BAR_CHART_DATA = [
  { name: "一月", value: 100 },
  { name: "二月", value: 200 },
  { name: "三月", value: 300 },
  { name: "四月", value: 400 },
  { name: "五月", value: 500 },
  { name: "六月", value: 600 },
  { name: "七月", value: 700 },
  { name: "八月", value: 800 },
  { name: "九月", value: 900 },
  { name: "十月", value: 1000 },
  { name: "十一月", value: 1100 },
  { name: "十二月", value: 1200 },
];

const BarChart = () => {
  return (
    <div className="w-full h-140 flex flex-col gap-6 border-2 rounded-md p-6 shadow-xs">
      <p className="text-paragraph text-primary/80">月度營業額</p>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart width={1000} height={1000} data={FAKE_BAR_CHART_DATA}>
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
