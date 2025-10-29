import { useGetOutboundApi } from "@/api/supabase/outboundAPi/useGetOutboundApi";
import { useEffect, useMemo, useState } from "react";
import { BarChartData } from "../BarChart/type";
import { MONTH_INITIAL_DATA } from "../BarChart/constants";
import {
  getMonthlyData,
  getQuarterlyData,
} from "../utils/processDashboardData";

export type TimeRange = "month" | "quarter" | "year";
export type Category = "profitAmount" | "salesAmount";

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
