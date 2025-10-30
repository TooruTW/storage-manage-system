import { useState, useEffect } from "react";
import { CellContext } from "@tanstack/react-table";
import { CreateInbound } from "@/components/views/CreateView/CreateInbound/type";

// 計算總價的單元格組件
const CalcTotalCell = <TData extends Record<string, unknown>>({
  row: { index, original },
  column: { id },
  table,
}: CellContext<TData, unknown>) => {
  function formatValue(value: number) {
    return value.toLocaleString();
  }

  // 計算總價：數量 × 單價
  function calculateTotal(quantity: number, pricePerUnit: number): number {
    return quantity * pricePerUnit;
  }

  // 從原始數據獲取數量和單價
  const rowData = original as unknown as CreateInbound;
  const quantity = rowData?.quantity || 0;
  const pricePerUnit = rowData?.price_per_unit || 0;

  // 計算總價
  const calculatedTotal = calculateTotal(quantity, pricePerUnit);

  const [value, setValue] = useState<string>(formatValue(calculatedTotal));

  // 當數量或單價改變時，重新計算總價
  useEffect(() => {
    const newTotal = calculateTotal(quantity, pricePerUnit);
    setValue(formatValue(newTotal));

    // 更新表格數據中的 totalPrice
    if (table.options.meta?.updateData) {
      table.options.meta.updateData(index, id, newTotal);
    }
  }, [quantity, pricePerUnit, index, id, table]);

  return (
    <div
      className={`text-center italic `}
    >
      <span className="font-medium">{value}</span>
    </div>
  );
};

export default CalcTotalCell;
