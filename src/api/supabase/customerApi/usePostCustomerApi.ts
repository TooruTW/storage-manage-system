import supabase from "..";
import { SupplierType } from "@/types/SupplierType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postCustomerApi = async (supplier: Partial<SupplierType>) => {
  const { data, error } = await supabase
    .from("customer")
    .insert([supplier])
    .select();

  if (error) {
    console.error("Post supplier error", error);
    throw error;
  }
  return data as unknown as SupplierType[];
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
