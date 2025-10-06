import { useState, useEffect } from "react";
import { CellContext } from "@tanstack/react-table";
import { CreateOutbound } from "../../type";

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
  function calculateTotal(quantity: number, pricePerUnit: number, totalPrice: number): number {
    return totalPrice - quantity * pricePerUnit;
  }

  // 從原始數據獲取數量和單價
  const rowData = original as unknown as CreateOutbound;
  const quantity = rowData?.quantity || 0;
  const costPerUnit = rowData?.costPerUnit || 0; 
  const totalPrice = rowData?.totalPrice || 0;

  // 計算總價
  const calculatedTotalCost = calculateTotal(quantity, costPerUnit, totalPrice);

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState<string>(formatValue(calculatedTotalCost));

  // 當數量或單價改變時，重新計算總價
  useEffect(() => {
    const newTotal = calculateTotal(quantity, costPerUnit, totalPrice);
    setValue(formatValue(newTotal));

    // 更新表格數據中的 totalPrice
    if (table.options.meta?.updateData) {
      table.options.meta.updateData(index, id, newTotal);
    }
  }, [quantity, costPerUnit, totalPrice, index, id, table]);

  return (
    <div
      className={`text-center italic ${calculatedTotalCost < 0 && "text-red-500"}`}
    >
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default CalcProfitCell;
