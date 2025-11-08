import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CreateInbound } from "@/components/views/CreateView/CreateInbound/type";

import supabase from "..";

const postInboundApi = async (inbound: CreateInbound[]) => {
  const { error } = await supabase.rpc("insert_inbound_array", {
    inbound_data: inbound,
  });
  if (error) {
    console.error("Post inbound error", error);
    throw error;
  }

  return;
};

const usePostInboundApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postInboundApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inbound"] });
    },
    onError: (error) => {
      console.error("Post inbound error", error);
    },
  });
};

export default usePostInboundApi;
