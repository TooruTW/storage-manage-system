import { useEffect, useRef, useState } from "react";
import { unLoginButtonList, loginButtonList, mobileLoginButtonList } from "./constants";
import { useNavigate } from "react-router-dom";
import { ButtonList } from "./type";

const ButtonContainer = () => {
  const isLogin = useRef(true);

  const navigate = useNavigate();
  const [buttonList, setButtonList] = useState<ButtonList[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const media = navigator.userAgent.includes("Mobile");
    setIsMobile(media);
  }, []);
  useEffect(() => {
    if (!isLogin.current) {
      setButtonList(unLoginButtonList);
    } else {
      if (isMobile) {
        setButtonList(mobileLoginButtonList);
      } else {
        setButtonList(loginButtonList);
      }
    }
  }, [isLogin, isMobile]);

  return (
    <div className="flex w-fit max-lg:w-1/3 max-lg:min-w-75 gap-2 max-lg:flex-col max-lg:gap-7">
      {buttonList.map((button, index) => (
        <button
          key={button.label}
          onClick={() => navigate(button.path)}
          className={`w-fit p-4 max-lg:w-full text-primary-foreground rounded-md max-lg:py-4 cascade-btn-${
            100 - index * 10
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
