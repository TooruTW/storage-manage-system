import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../../type";

type ManualAddProps = {
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
};

const ManualAdd = ({ setValue, onSubmit }: ManualAddProps) => {
  const [productName, setProductName] = useState("");
  const [unit, setUnit] = useState("");

  const handleSubmit = () => {
    if (!productName.trim() || !unit.trim()) {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
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
          onKeyDown={handleKeyDown}
        />
        <input
          className="border-b-1 border-primary/10 w-1/3"
          placeholder="單位"
          type="text"
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default ManualAdd;
