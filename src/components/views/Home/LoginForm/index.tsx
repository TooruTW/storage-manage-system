import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { EyeClosed } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Inputs = {
  account: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    navigate("/home");
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 p-6 rounded-md border-1 border-primary/20 box-shadow-md min-w-75"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-h2 font-bold">登入</h2>
        <div className="text-label text-primary/60">
          <p>請輸入帳號密碼</p>
          <p>如需新增帳號，請聯絡管理員</p>
        </div>
      </div>

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
        <Button variant="cancel" type="button">
          取消
        </Button>
        <Button type="submit">登入</Button>
      </div>
    </form>
  );
};

export default LoginForm;
