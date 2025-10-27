import supabase from "..";
import { useMutation } from "@tanstack/react-query";
import { InventoryType } from "@/types/InventoryType";

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
  return useMutation({
    mutationFn: postInventoryApi,
  });
};

export default usePostInventoryApi;
