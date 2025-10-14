import { useMutation } from "@tanstack/react-query";
import supabase from "..";

const loginApi = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error", error);
    throw error; // 拋出錯誤讓 TanStack Query 可以捕捉
  }

  console.log("data", data);
  return data; // 只返回 data
};

const usePostLoginApi = () => {
  const mutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi(email, password),
  });
  return mutation;
};

export { usePostLoginApi };
