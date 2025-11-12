import { useEffect } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { Header } from "./Header";
import LoadingView from "./LoadingView";
import PopupContainer from "./PopupContainer";

import useLoading from "@/stores/useLoading";
import { useAccountStore } from "@/stores/useAccountState";

import { useCheckStateApi } from "@/api/supabase/authApi/useCheckStateApi";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const viewUrl = location.pathname.split("/")[1];
  const isOpen = viewUrl !== "home";
  const { isLoading } = useLoading();
  const loginState = useAccountStore((state) => state.loginState);

  useCheckStateApi();

  useEffect(() => {
    if (loginState === "checking") return;

    const allowUnauthenticatedPaths = ["/home"];
    const isAllowedPath = allowUnauthenticatedPaths.some((path) =>
      location.pathname.startsWith(path)
    );

    if (loginState !== "success" && !isAllowedPath) {
      navigate("/home", { replace: true });
    }
  }, [loginState, location.pathname, navigate]);

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
