import supabase from "..";
import { SupplierType } from "@/types/SupplierType";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const postSupplierApi = async (supplier: Partial<SupplierType>) => {
  const { data, error } = await supabase
    .from("supplier")
    .insert([supplier])
    .select();

  if (error) {
    console.error("Post supplier error", error);
    throw error;
  }
  return data as unknown as SupplierType[];
};

const usePostSupplierApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postSupplierApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["supplier"] });
    },
    onError: (error) => {
      console.error("新增進貨商失敗", error);
    },
  });
};

export default usePostSupplierApi;
