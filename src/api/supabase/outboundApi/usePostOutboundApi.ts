import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CreateOutbound } from "@/components/views/CreateView/CreateOutbound/type";

import supabase from "..";

const postOutboundApi = async (outbound: CreateOutbound[]) => {
  const { error } = await supabase.rpc("insert_outbound_array", {
    outbound_data: outbound,
  });
  if (error) {
    console.error("Post outbound error", error);
    throw error;
  }

  return;
};

const usePostOutboundApi = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postOutboundApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["outbound"] });
    },
    onError: (error) => {
      console.error("Post outbound error", error);
    },
  });
};

export default usePostOutboundApi;
