import { useEffect, useState } from "react";
import dayjs from "dayjs";

const TextContent = () => {
  const [greeting, setGreeting] = useState<string>("");

  const getGreeting = () => {
    const hour = dayjs().hour();
    if (hour >= 6 && hour < 12) {
      setGreeting("早安");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("午安");
    } else {
      setGreeting("晚安");
    }
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-h2 font-bold">{greeting}</h2>
      <div className="text-label text-primary/60">
        <p>請輸入帳號密碼</p>
        <p>如需新增帳號，請聯絡管理員</p>
      </div>
    </div>
  );
};

export default TextContent;
