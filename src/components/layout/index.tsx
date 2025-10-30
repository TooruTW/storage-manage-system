import { Outlet, useLocation } from "react-router-dom";

import { Header } from "./Header";
import LoadingView from "./LoadingView";
import PopupContainer from "./PopupContainer";

import useLoading from "@/stores/useLoading";

const Layout = () => {
  const location = useLocation();
  const viewUrl = location.pathname.split("/")[1];
  const isOpen = viewUrl !== "home";
  const { isLoading } = useLoading();

  return (
    <div className="h-screen flex flex-col w-full px-12 max-md:px-4">
      <PopupContainer />
      {isOpen && (
        <div className="w-full py-4 h-fit">
          <Header />
        </div>
      )}
      {isLoading && <LoadingView />}
      <main className="w-full flex-1 flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
