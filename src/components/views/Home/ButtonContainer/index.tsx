import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

import { unLoginButtonList, loginButtonList } from "./constants";

type ButtonList = {
  label: string;
  onClick: () => void;
};

const ButtonContainer = () => {
  const isLogin = useRef(true);

  const [buttonList, setButtonList] = useState<ButtonList[]>([]);

  useEffect(() => {
    if (!isLogin.current) {
      setButtonList(unLoginButtonList);
    } else {
      setButtonList(loginButtonList);
    }
  }, [isLogin]);

  return (
    <div className="flex gap-2">
      {buttonList.map((button) => (
        <Button variant="homePage" key={button.label} onClick={button.onClick}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
