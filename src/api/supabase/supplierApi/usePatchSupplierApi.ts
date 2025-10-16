import { EditDataMap } from "@/components/views/DatabaseView/shared/types/editDataMap";
import { useMutation } from "@tanstack/react-query";

type UpdateData = {
  id: string;
  column: string[];
  value: unknown[];
};

const patchSupplierApi = async (data: EditDataMap) => {
  const tableName = "supplier";
  const updateDataList: UpdateData[] = [];

  data.forEach((val, key) => {
    const updateData: UpdateData = {
      id: key,
      column: [],
      value: [],
    };
    // id
    updateData.id = key;
    // column
    val.forEach((val, key) => {
      updateData.column.push(key);
      updateData.value.push(val);
    });
    updateDataList.push(updateData);
  });

  console.log("updateDataList :", updateDataList);
  console.log("table name :", tableName);
};

const usePatchSupplierApi = () => {
  return useMutation({
    mutationFn: (data: EditDataMap) => patchSupplierApi(data),
  });
};

export { usePatchSupplierApi };
