import { useMutation } from "@tanstack/react-query";
import supabase from "..";
import { EditDataMap } from "@/components/views/DatabaseView/shared/types/EditDataMap";

type UpdateData = {
  id: string;
  data: {
    current_stock?: number;
  };
};

type BatchUpdateResponse = {
  success_count: number;
  error_count: number;
  results: Array<{
    id: string;
    success: boolean;
    error?: string;
  }>;
};

const patchConsignmentApi = async (data: EditDataMap) => {
  const updateDataList: UpdateData[] = [];
  data.forEach((val, key) => {
    const data: UpdateData["data"] = {};

    val.forEach((val, key) => {
      data[key as keyof UpdateData["data"]] = Number(val);
    });
    updateDataList.push({
      id: key,
      data: data,
    });
  });

  console.log("準備發送的資料 :", updateDataList);

  // 調用 Supabase RPC function
  const { data: result, error } = await supabase.rpc("update_consignment_batch", {
    update_data: updateDataList,
  });

  if (error) {
    console.error("RPC 調用錯誤:", error);
    throw error;
  }

  console.log("更新結果:", result);

  return result as BatchUpdateResponse;
};

const usePatchConsignmentApi = () => {
  return useMutation({
    mutationFn: (data: EditDataMap) => patchConsignmentApi(data),
  });
};

export { usePatchConsignmentApi };
