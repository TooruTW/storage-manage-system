import { useMutation, useQueryClient } from "@tanstack/react-query";

import { InventoryType } from "@/types/InventoryType";

import supabase from "..";

type newProductData = {
  product_name: string;
  unit: string;
};

const postInventoryApi = async (product: newProductData) => {
  const { data, error } = await supabase
    .from("product")
    .insert([product])
    .select();

  if (error) {
    console.error("Post inventory error", error);
    throw error;
  }

  return data as unknown as InventoryType[];
};

const usePostInventoryApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postInventoryApi,
    onSuccess: (data) => {
      console.log("新增商品成功", data);
      queryClient.invalidateQueries({ queryKey: ["inventory"] });
    },
    onError: (error) => {
      console.error("新增商品失敗", error);
    },
  });
};

export default usePostInventoryApi;
