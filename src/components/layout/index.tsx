import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import LoadingView from "./LoadingView";
import useLoading from "@/stores/useLoading";
import PopoutContainer from "./PopoutContainer";

const Layout = () => {
  const location = useLocation();
  const viewUrl = location.pathname.split("/")[1];
  const isOpen = viewUrl !== "home";
  const { loading } = useLoading();

  return (
    <div className="h-screen flex flex-col w-full px-12 max-md:px-4">
      <PopoutContainer />
      {isOpen && (
        <div className="w-full py-4 h-fit">
          <Header />
        </div>
      )}
      {loading && (
        <LoadingView />
      )}
      <main className="w-full h-full flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
