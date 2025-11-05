import BarChart from "./BarChart";
import CategoryCard from "./CategoryCard";
import Tab from "./Tab";

const Dashboard = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center gap-7 shadow-xs">
      <Tab />
      <CategoryCard />
      <BarChart />
    </div>
  );
};

export default Dashboard;
