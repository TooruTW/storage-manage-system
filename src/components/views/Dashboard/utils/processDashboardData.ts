import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import { OutboundType } from "@/types/OutboundType";
import { BarChartData } from "../BarChart/type";
import {
  MONTH_INITIAL_DATA,
  QUARTER_INITIAL_DATA,
} from "../BarChart/constants";

dayjs.extend(quarterOfYear);

export const getMonthlyData = (
  data: OutboundType[]
): {
  profitResult: BarChartData[];
  salesResult: BarChartData[];
} => {
  const monthlyProfitMap = new Map<string, number>();
  const monthlySalesMap = new Map<string, number>();
  const currentYear = dayjs().year();

  if (!data)
    return {
      profitResult: MONTH_INITIAL_DATA,
      salesResult: MONTH_INITIAL_DATA,
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

export const getQuarterlyData = (
  data: OutboundType[]
): {
  profitResult: BarChartData[];
  salesResult: BarChartData[];
} => {
  const quarterlyProfitMap = new Map<string, number>();
  const quarterlySalesMap = new Map<string, number>();
  const currentYear = dayjs().year();

  if (!data)
    return {
      profitResult: QUARTER_INITIAL_DATA,
      salesResult: QUARTER_INITIAL_DATA,
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
