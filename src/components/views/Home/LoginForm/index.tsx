import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextContent from "./TextContent";
import { useAccountStore } from "@/stores/useAccountState";
import { usePostLoginApi } from "@/api/supabase/authApi/usePostLoginApi";
import { useCheckStateApi } from "@/api/supabase/authApi/useCheckStateApi";

type Inputs = {
  account: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const { mutate: postLoginApi } = usePostLoginApi();
  const {data: checkState} = useCheckStateApi();

  useEffect(()=>{
    if(checkState){
      navigate("/home");
    }
  },[checkState,navigate])

  const handleLogin = async (data: Inputs) => {
    postLoginApi(
      {
        email: data.account,
        password: data.password,
      },
      {
        onSuccess: () => {
          console.log("登入成功");

          useAccountStore.getState().setIsLogin(true);
          useAccountStore.getState().setUser(data.account);

          navigate("/home");
        },
        onError: () => {
          reset(); // 清空表單
          alert("登入失敗，請檢查帳號密碼");
        },
      }
    );
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    handleLogin(data);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 p-6 rounded-md border-1 border-primary/20 box-shadow-md min-w-75"
    >
      <TextContent />

      <label htmlFor="account" className="flex flex-col gap-1">
        <span className="text-label">帳號</span>
        <input
          className="border-2 rounded-md px-2 py-1"
          {...register("account", { required: true })}
          placeholder="請輸入帳號"
        />
        {errors.account?.type === "required" && (
          <p role="alert" className="text-label text-destructive">
            帳號是必填的
          </p>
        )}
      </label>

      <label htmlFor="password" className="flex flex-col gap-1 ">
        <span className="text-label">密碼</span>

        <div className="border-2 rounded-md px-2 py-1 relative focus-within:border-primary/30">
          <input
            className=" focus:outline-none"
            type={isPasswordVisible ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="請輸入密碼"
          />
          {/* decoration component */}
          <div
            className="absolute right-2 bottom-1 opacity-50"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <Eye /> : <EyeClosed />}
          </div>
        </div>

        {errors.password?.type === "required" && (
          <p role="alert" className="text-label text-destructive">
            密碼是必填的
          </p>
        )}
      </label>

      <div className="flex justify-between">
        <Button
          variant="cancel"
          className="max-lg:w-1/2"
          type="button"
          onClick={() => navigate("/home")}
        >
          取消
        </Button>
        <Button className="max-lg:w-1/2" type="submit">
          登入
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
