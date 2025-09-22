import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";

const Layout = () => {
    const location = useLocation();
    const viewUrl = location.pathname.split("/")[1];
    const isOpen = viewUrl !== "home";
    

  return (
    <div className="min-h-screen flex flex-col w-full px-12">
      {isOpen && <div className="w-full py-4">
        <Header />
      </div>}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
