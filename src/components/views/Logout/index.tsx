import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { useAccountStore } from "@/stores/useAccountState";

import { usePostLogoutApi } from "@/api/supabase/authApi/usePostLogoutApi";

const Logout = () => {
  const navigate = useNavigate();
  const { mutate: postLogoutApi } = usePostLogoutApi();
  const queryClient = useQueryClient();

  useEffect(() => {
    postLogoutApi(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["checkState"] });
        useAccountStore.getState().reset();
        navigate("/home");
      },
      onError: () => {
        alert("登出失敗");
      },
    });
  }, [navigate, postLogoutApi, queryClient]);
  return <div></div>;
};

export default Logout;
