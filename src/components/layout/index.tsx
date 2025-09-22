import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full px-12">
      <div className="w-full py-4">
        <Header />
      </div>
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
