import "dayjs/locale/zh-tw";
import TimeComponent from "./TimeComponent";
import MainImage from "./MainImage";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const isLoggingIn = location.pathname === "/home/login";
  return (
    <div className={`w-full h-screen flex flex-col items-center justify-center py-4 ${!isLoggingIn ? "gap-7" : "gap-1"}`}>
      <h1 className="text-h1 font-bold">進出貨管理系統</h1>
      <MainImage />
      <TimeComponent />
      <Outlet />
    </div>
  );
};

export default Home;
