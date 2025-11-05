import { useMutation } from "@tanstack/react-query";

import supabase from "..";

const deleteInboundApi = async (ids: string[]) => {
  const { data, error } = await supabase.rpc("delete_inbound_batch", {
    id_array: ids,
  });
  if (error) {
    console.error("Delete inbound error", error);
    throw error;
  }
  return data;
};

const useDeleteInboundApi = () => {
  return useMutation({
    mutationFn: deleteInboundApi,
  });
};

export default useDeleteInboundApi;
