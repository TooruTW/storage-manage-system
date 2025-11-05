import { useMutation } from "@tanstack/react-query";

import supabase from "..";

const deleteOutboundApi = async (ids: string[]) => {
  const { data, error } = await supabase.rpc("delete_outbound_batch", {
    id_array: ids,
  });
  if (error) {
    console.error("Delete outbound error", error);
    throw error;
  }
  return data;
};

const useDeleteOutboundApi = () => {
  return useMutation({
    mutationFn: deleteOutboundApi,
  });
};

export default useDeleteOutboundApi;
