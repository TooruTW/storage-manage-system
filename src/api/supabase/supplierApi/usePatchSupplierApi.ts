import { useMutation } from "@tanstack/react-query";
import supabase from "..";
import { EditDataMap } from "@/components/views/DatabaseView/shared/types/EditDataMap";

type UpdateData = {
  id: string;
  data: {
    name?: string;
    contact_person?: string;
    landline_phone?: string;
    mobile_phone?: string;
    address?: string;
    remark?: string;
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

const patchSupplierApi = async (data: EditDataMap) => {
  const updateDataList: UpdateData[] = [];
  data.forEach((val, key) => {
    const data: UpdateData["data"] = {};

    val.forEach((val, key) => {
      data[key as keyof UpdateData["data"]] = val as unknown as string;
    });
    updateDataList.push({
      id: key,
      data: data,
    });
  });

  console.log("準備發送的資料 :", updateDataList);

  // 調用 Supabase RPC function
  const { data: result, error } = await supabase.rpc("update_supplier_batch", {
    update_data: updateDataList,
  });

  if (error) {
    console.error("RPC 調用錯誤:", error);
    throw error;
  }

  console.log("更新結果:", result);

  return result as BatchUpdateResponse;
};

const usePatchSupplierApi = () => {
  return useMutation({
    mutationFn: (data: EditDataMap) => patchSupplierApi(data),
  });
};

export { usePatchSupplierApi };
