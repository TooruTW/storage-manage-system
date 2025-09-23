import Tab from "./Tab";
import CategoryCard from "./CategoryCard";
import BarChart from "./BarChart";

const Dashboard = () => {
  return (
    <div className="h-full flex flex-col justify-center gap-7 shadow-xs">
      <Tab />
      <CategoryCard />
      <BarChart />
    </div>
  );
};

export default Dashboard;
