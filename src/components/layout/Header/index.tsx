import { useEffect, useState } from "react";

import dayjs from "dayjs";
import converter from "number-to-chinese-words";
import { useNavigate } from "react-router-dom";

import { Box } from "lucide-react";

import { Button } from "@/components/ui/button";

import { INITIAL_TIME } from "./data";

export const Header = () => {
  const [time, setTime] = useState(INITIAL_TIME);
  const navigate = useNavigate();
  const updateTime = () => {
    const now = dayjs();
    const year = converter.toWords(now.year() - 1911);
    const month = converter.toWords(now.month() + 1);
    const date = converter.toWords(now.date());
    const week = now.day() === 0 ? "日" : converter.toWords(now.day());
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
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-4">
        <Box
          className="cursor-pointer"
          strokeWidth={1}
          onClick={() => navigate("/home")}
        />
        {/* 日曆和時間 */}
        <div>
          <p className="text-label max-md:flex max-md:flex-col ">
            <span>
              民國<span> {time.year} </span>年<span> {time.month} </span>月
              <span> {time.date} </span> 日 <span>（{time.week}）</span>
            </span>
            <span>
              <span> {time.hour} </span> 點<span> {time.minute} </span>分
            </span>
          </p>
        </div>
      </div>
      <Button onClick={() => navigate("/home")}>回首頁</Button>
    </div>
  );
};
