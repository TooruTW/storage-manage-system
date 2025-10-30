import { useQuery } from "@tanstack/react-query";
import supabase from "..";
import { useAccountStore } from "@/stores/useAccountState";

const checkStateApi = async () => {
  const globalState = useAccountStore.getState();
  const { data, error } = await supabase.auth.getSession();

  // 等待 5 秒
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  if (error) {
    console.error("Check state error", error);
    throw error;
  }

  if (!data.session) {
    globalState.setLoginState("failed");
    return null;
  } else {
    globalState.setLoginState("success");
    return data;
  }
};

const useCheckStateApi = () => {
  const data = useQuery({
    queryKey: ["checkState"],
    queryFn: checkStateApi,
  });
  return data;
};

export { useCheckStateApi };
