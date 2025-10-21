import { useMutation } from "@tanstack/react-query";
import supabase from "..";

const logoutApi = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout error", error);
    throw error;
  }
  return;
};

const usePostLogoutApi = () => {
  return useMutation({
    mutationFn: logoutApi,
  });
};

export { usePostLogoutApi };
