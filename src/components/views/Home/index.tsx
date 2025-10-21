import "dayjs/locale/zh-tw";
import MainImage from "./MainImage";
import { Outlet, useLocation } from "react-router-dom";
import TimeComponent from "./TimeComponent";
import { useEffect, useMemo, useState } from "react";

const Home = () => {
  const location = useLocation();
  const isLoggingIn = useMemo(
    () => location.pathname === "/home/login",
    [location.pathname]
  );

  const [style, setStyle] = useState<string>("gap-7");

  useEffect(() => {
    if (isLoggingIn) setStyle("gap-1");
    else setStyle("gap-7");
  }, [isLoggingIn]);

  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center py-4 ${style}`}
    >
      <h1 className="text-h1 font-bold">進出貨管理系統</h1>
      <MainImage />
      <TimeComponent />
      <Outlet />
    </div>
  );
};

export default Home;
