import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccountStore } from "@/stores/useAccountState";

import { useCheckStateApi } from "@/api/supabase/authApi/useCheckStateApi";

import {
  unLoginButtonList,
  loginButtonList,
  mobileLoginButtonList,
} from "./constants";
import { ButtonList } from "./type";

const ButtonContainer = () => {
  const isLogin = useAccountStore((state) => state.isLogin);
  const navigate = useNavigate();
  const [buttonList, setButtonList] = useState<ButtonList[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const { data: checkState } = useCheckStateApi();

  // 判斷是否為行動裝置
  useEffect(() => {
    const media = navigator.userAgent.includes("Mobile");
    setIsMobile(media);
  }, []);

  // 判斷是否登入
  useEffect(() => {
    if (!checkState) return;
    if (!checkState.session) {
      useAccountStore.getState().setIsLogin(false);
      return;
    }
    useAccountStore.getState().setIsLogin(true);
  }, [checkState]);

  // 判斷按鈕列表
  useEffect(() => {
    if (!isLogin) {
      setButtonList(unLoginButtonList);
    } else if (isLogin === true) {
      if (isMobile) {
        setButtonList(mobileLoginButtonList);
      } else {
        setButtonList(loginButtonList);
      }
    }
  }, [isLogin, isMobile]);

  return (
    <div className="flex w-fit max-lg:w-1/3 max-lg:min-w-75 gap-2 max-lg:flex-col max-lg:gap-7">
      {isLogin === "checking" && (
        <div className="w-fit h-15 flex items-center gap-2">
          連線中
          <span className="bg-primary rounded-full animate-bounce size-1"></span>
          <span className="bg-primary rounded-full animate-bounce size-1"></span>
          <span className="bg-primary rounded-full animate-bounce size-1"></span>
        </div>
      )}

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
