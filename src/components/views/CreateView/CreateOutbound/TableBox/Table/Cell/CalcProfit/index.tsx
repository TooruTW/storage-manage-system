import { useState, useEffect, useMemo } from "react";
import { CellContext } from "@tanstack/react-table";
import { CreateOutbound } from "@/components/views/CreateView/CreateOutbound/type";

// 計算總價的單元格組件
const CalcProfitCell = <TData extends Record<string, unknown>>({
  row: { index, original },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  function formatValue(value: number) {
    return value.toLocaleString();
  }

  // 計算總價：數量 × 單價
  function calculateTotal(
    quantity: number,
    costPerUnit: number,
    pricePerUnit: number
  ): number {
    return (pricePerUnit - costPerUnit) * quantity;
  }

  // 從原始數據獲取數量和單價
  const rowData = original as unknown as CreateOutbound;
  const quantity = rowData?.quantity || 0;
  const costPerUnit = rowData?.cost_per_unit || 0;
  const pricePerUnit = rowData?.price_per_unit || 0;

  // 計算總價
  const calculatedTotalCost = calculateTotal(
    quantity,
    costPerUnit,
    pricePerUnit
  );
  const warningStyle = useMemo(()=>{
    if(calculatedTotalCost < 0) return "text-red-500";
    return "";
  },[calculatedTotalCost])

  const [value, setValue] = useState<string>(formatValue(calculatedTotalCost));

  // 當數量或單價改變時，重新計算總價
  useEffect(() => {
    const newTotal = calculateTotal(quantity, costPerUnit, pricePerUnit);
    setValue(formatValue(newTotal));

    // 更新表格數據中的 totalPrice
    if (table.options.meta?.updateData) {
      table.options.meta.updateData(index, id, newTotal);
    }
  }, [quantity, costPerUnit, pricePerUnit, index, id, table]);

  return (
    <div
      className={`text-center italic ${warningStyle}`}
    >
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default CalcProfitCell;
