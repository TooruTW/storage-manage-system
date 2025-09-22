import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

import { unLoginButtonList, loginButtonList } from "./constants";
import { useNavigate } from "react-router-dom";

type ButtonList = {
  label: string;
  path: string;
};

const ButtonContainer = () => {
  const isLogin = useRef(false);
  const navigate = useNavigate();
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
        <Button variant="homePage" key={button.label} onClick={() => navigate(button.path)}>
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonContainer;
