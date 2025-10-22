import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAccountStore } from "@/stores/useAccountState";

import { useCheckStateApi } from "@/api/supabase/authApi/useCheckStateApi";

import {
  unLoginButtonList,
  loginButtonList,
  mobileLoginButtonList,
} from "./constants";
import { ButtonList } from "./type";
import Loading from "./Loading";

const ButtonContainer = () => {
  const loginState = useAccountStore((state) => state.loginState);
  const navigate = useNavigate();
  const [buttonList, setButtonList] = useState<ButtonList[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const { data: checkState } = useCheckStateApi();
  const buttonStyle = useCallback((index: number) => {
    return `cascade-btn-${100 - index * 10}`;
  }, []);
  const isChecking = useMemo(() => {
    return loginState === "checking";
  }, [loginState]);

  // 判斷是否為行動裝置
  useEffect(() => {
    const media = navigator.userAgent.includes("Mobile");
    setIsMobile(media);
  }, []);

  // 判斷是否登入
  useEffect(() => {
    if (!checkState) return;
    if (!checkState.session) {
      useAccountStore.getState().setLoginState("failed");
      return;
    }
    useAccountStore.getState().setLoginState("success");
  }, [checkState]);

  // 判斷按鈕列表
  useEffect(() => {
    if (loginState === "failed") {
      setButtonList(unLoginButtonList);
    } else if (loginState === "success") {
      if (isMobile) {
        setButtonList(mobileLoginButtonList);
      } else {
        setButtonList(loginButtonList);
      }
    }
  }, [loginState, isMobile]);

  return (
    <div className="flex w-fit max-lg:w-1/3 max-lg:min-w-75 gap-2 max-lg:flex-col max-lg:gap-7">
      {isChecking && <Loading />}

      {buttonList.map((button, index) => (
        <button
          key={button.label}
          onClick={() => navigate(button.path)}
          className={`w-fit p-4 max-lg:w-full text-primary-foreground rounded-md max-lg:py-4 
          ${buttonStyle(index)}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
