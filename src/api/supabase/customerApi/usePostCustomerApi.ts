import supabase from "..";
import { CustomerType } from "@/types/CustomerType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postCustomerApi = async (customer: Partial<CustomerType>) => {
  const { data, error } = await supabase
    .from("customer")
    .insert([customer])
    .select();

  if (error) {
    console.error("Post customer error", error);
    throw error;
  }
  return data as unknown as CustomerType[];
};

const usePostCustomerApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postCustomerApi,
    onSuccess: (data) => {
      console.log("新增客戶成功", data);
      queryClient.invalidateQueries({ queryKey: ["customer"] });
    },
    onError: (error) => {
      console.error("新增客戶失敗", error);
    },
  });
};

export default usePostCustomerApi;
