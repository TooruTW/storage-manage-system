import { useState } from "react";
import { Time } from "@/components/layout/Header/type";
import dayjs from "dayjs";
import "dayjs/locale/zh-tw";
import { useEffect } from "react";


const TimeComponent = () => {
  const [time, setTime] = useState<Time>({
    year: "",
    month: "",
    date: "",
    week: "",
    time: "",
  });

  const updateTime = () => {
    dayjs.locale("zh-tw");
    const now = dayjs();
    const year = now.year() - 1911;
    const month = now.month() + 1;
    const date = now.date();
    const week = now.day();
    const time = now.format("hh:mm A");

    setTime({
      year: year.toString(),
      month: month.toString(),
      date: date.toString(),
      week: week.toString(),
      time: time,
    });
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => {
      updateTime();
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>
        民國 {time.year} 年 {time.month} 月 {time.date} 日
      </p>
      <p className="text-center">{time.time}</p>
    </div>
  );
};

export default TimeComponent;
