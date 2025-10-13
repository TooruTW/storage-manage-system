import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAccountStore } from "@/stores/useAccountState";
import { usePostLogoutApi } from "@/api/supabase/authApi/usePostLogoutApi";

const Logout = () => {
  const navigate = useNavigate();
  const { mutate: postLogoutApi } = usePostLogoutApi();

  useEffect(() => {
    postLogoutApi(undefined, {
      onSuccess: () => {
        useAccountStore.getState().reset();
        navigate("/home");
      },
      onError: () => {
        alert("登出失敗");
      },
    });
  }, [navigate, postLogoutApi]);
  return <div></div>;
};

export default Logout;
