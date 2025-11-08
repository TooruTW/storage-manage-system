import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../../type";

type ManualAddProps = {
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
  getValues: UseFormGetValues<CreateInbound>;
};

const ManualAdd = ({ setValue, onSubmit, getValues }: ManualAddProps) => {
  const [productName, setProductName] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = () => {
    if (!productName.trim() || !unit.trim()) return;
    const supplierId = getValues("supplier_id");
    if (!supplierId) {
      alert("請先選擇進貨商");
      return;
    }
      
    // 手動新增的商品，設定 product_id 為空字串（表示為新商品，尚未存在於資料庫）
    setValue("product_id", "");
    setValue("product_name", productName);
    setValue("unit", unit);
    setValue("price_per_unit", 0);
    onSubmit();
    // 清空輸入框
    setProductName("");
    setUnit("");
  };

  return (
    <div className="flex flex-col gap-2 border-1 border-primary/10 rounded-md py-2 px-4">
      <div className="flex justify-between items-center w-full">
        <label className="text-paragraph " htmlFor="productName">
          新增商品
        </label>
        <Button type="button" onClick={handleSubmit}>
          新增
        </Button>
      </div>

      <div className="flex justify-between items-center w-full gap-4">
        <input
          className="border-b-1 border-primary/10 w-2/3"
          placeholder="商品名稱"
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          className="border-b-1 border-primary/10 w-1/3"
          placeholder="單位"
          type="text"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ManualAdd;
