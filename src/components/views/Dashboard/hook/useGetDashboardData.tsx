import { useGetOutboundApi } from "@/api/supabase/outboundAPi/useGetOutboundApi";
import { useEffect, useMemo, useState } from "react";
import { OutboundType } from "@/types/OutboundType";

import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import { BarChartData } from "../BarChart/type";
import {
  MONTH_INITIAL_DATA,
  QUARTER_INITIAL_DATA,
} from "../BarChart/constants";

export type TimeRange = "month" | "quarter" | "year";
export type Category = "profitAmount" | "salesAmount";

dayjs.extend(quarterOfYear);

const getMonthlyData = (data: OutboundType[]) => {
  const monthlyProfitMap = new Map<string, number>();
  const monthlySalesMap = new Map<string, number>();
  const currentYear = dayjs().year();

  if (!data)
    return {
      profitAmount: 0,
      salesAmount: 0,
      result: MONTH_INITIAL_DATA,
    };

  data.forEach((item) => {
    if (dayjs(item.shipment_date).year() !== currentYear) {
      return;
    }
    const month = dayjs(item.shipment_date).format("MM");

    if (monthlyProfitMap.has(month)) {
      monthlyProfitMap.set(
        month,
        monthlyProfitMap.get(month)! + item.net_profit
      );
    } else {
      monthlyProfitMap.set(month, item.net_profit);
    }
    if (monthlySalesMap.has(month)) {
      monthlySalesMap.set(
        month,
        monthlySalesMap.get(month)! + item.total_price
      );
    } else {
      monthlySalesMap.set(month, item.total_price);
    }
  });

  // 將月份轉換為中文月份
  const profitResult = MONTH_INITIAL_DATA.map((item, index) => {
    const monthKey = String(index + 1).padStart(2, "0");
    const hadValue = monthlyProfitMap.has(monthKey);
    if (hadValue) {
      return { ...item, value: monthlyProfitMap.get(monthKey)! };
    }
    return { ...item };
  });

  const salesResult = MONTH_INITIAL_DATA.map((item, index) => {
    const monthKey = String(index + 1).padStart(2, "0");
    const hadValue = monthlySalesMap.has(monthKey);
    if (hadValue) {
      return { ...item, value: monthlySalesMap.get(monthKey)! };
    }
    return { ...item };
  });

  return { profitResult, salesResult };
};

const getQuarterlyData = (data: OutboundType[]) => {
  const quarterlyProfitMap = new Map<string, number>();
  const quarterlySalesMap = new Map<string, number>();
  const currentYear = dayjs().year();

  if (!data)
    return {
      profitAmount: 0,
      salesAmount: 0,
      result: QUARTER_INITIAL_DATA,
    };

  data.forEach((item) => {
    if (dayjs(item.shipment_date).year() !== currentYear) {
      return;
    }
    const quarter = String(dayjs(item.shipment_date).quarter()).padStart(
      2,
      "0"
    );

    if (quarterlyProfitMap.has(quarter)) {
      quarterlyProfitMap.set(
        quarter,
        quarterlyProfitMap.get(quarter)! + item.net_profit
      );
    } else {
      quarterlyProfitMap.set(quarter, item.net_profit);
    }
    if (quarterlySalesMap.has(quarter)) {
      quarterlySalesMap.set(
        quarter,
        quarterlySalesMap.get(quarter)! + item.total_price
      );
    } else {
      quarterlySalesMap.set(quarter, item.total_price);
    }
  });

  // 將月份轉換為中文月份
  const profitResult = QUARTER_INITIAL_DATA.map((item, index) => {
    const quarterKey = String(index + 1).padStart(2, "0");
    const hadValue = quarterlyProfitMap.has(quarterKey);
    if (hadValue) {
      return { ...item, value: quarterlyProfitMap.get(quarterKey)! };
    }
    return { ...item };
  });

  const salesResult = QUARTER_INITIAL_DATA.map((item, index) => {
    const quarterKey = String(index + 1).padStart(2, "0");
    const hadValue = quarterlySalesMap.has(quarterKey);
    if (hadValue) {
      return { ...item, value: quarterlySalesMap.get(quarterKey)! };
    }
    return { ...item };
  });

  return { profitResult, salesResult };
};

const useGetDashboardData = (timeRange: TimeRange, category: Category) => {
  const [profitResult, setProfitResult] = useState<BarChartData[]>([]);
  const [salesResult, setSalesResult] = useState<BarChartData[]>([]);
  const [profitAmount, setProfitAmount] = useState<number>(0);
  const [salesAmount, setSalesAmount] = useState<number>(0);
  const { data: outboundData } = useGetOutboundApi();

  useEffect(() => {
    if (timeRange === "month") {
      const { profitResult, salesResult } = getMonthlyData(outboundData || []);
      setProfitResult(profitResult || []);
      setSalesResult(salesResult || []);
    } else if (timeRange === "quarter") {
      const { profitResult, salesResult } = getQuarterlyData(
        outboundData || []
      );
      setProfitResult(profitResult || []);
      setSalesResult(salesResult || []);
    }
  }, [timeRange, outboundData]);

  useEffect(() => {
    setProfitAmount(profitResult.reduce((acc, curr) => acc + curr.value, 0));
    setSalesAmount(salesResult.reduce((acc, curr) => acc + curr.value, 0));
  }, [profitResult, salesResult]);

  const result = useMemo(() => {
    if (!profitResult.length || !salesResult.length) return MONTH_INITIAL_DATA;
    if (category === "profitAmount") {
      return profitResult;
    } else if (category === "salesAmount") {
      return salesResult;
    }
    return MONTH_INITIAL_DATA;
  }, [category, profitResult, salesResult]);

  return { profitAmount, salesAmount, result };
};

export default useGetDashboardData;
