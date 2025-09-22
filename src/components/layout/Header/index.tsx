import { useEffect, useState } from "react";
import { Box } from "lucide-react";
import type { Time } from "./type";
import dayjs from "dayjs";
import converter from "number-to-chinese-words";

export const Header = () => {
  const [time, setTime] = useState<Time>({
    year: "",
    month: "",
    date: "",
    week: "",
    hour: 0,
    minute: 0,
  });

  const updateTime = () => {
    const now = dayjs();
    const year = converter.toWords(now.year() - 1911);
    const month = converter.toWords(now.month() + 1);
    const date = converter.toWords(now.date());
    const week = converter.toWords(now.day());
    const hour = now.hour();
    const minute = now.minute();

    setTime({ year, month, date, week, hour, minute });
  };

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => {
      updateTime();
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-start gap-4">
      <Box strokeWidth={1} />
      {/* Date and Time */}
      <div>
        <p>
          <span>
            民國<span> {time.year} </span>年<span> {time.month} </span>月
            <span> {time.date} </span> 日 <span>（{time.week}）</span>
          </span>
          <span> {time.hour} </span> 點<span> {time.minute} </span>分
          <span></span>
        </p>
      </div>
    </div>
  );
};
