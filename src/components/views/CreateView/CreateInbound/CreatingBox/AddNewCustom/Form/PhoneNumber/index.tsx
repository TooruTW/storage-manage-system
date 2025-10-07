import { FormComponentProps } from "../type";
import { useWatch } from "react-hook-form";

const PhoneNumber = ({ register, errors, control }: FormComponentProps) => {
  // 監聽兩個電話欄位的值
  const landlinePhone = useWatch({ control, name: "landlinePhone" });
  const mobilePhone = useWatch({ control, name: "mobilePhone" });

  // 自定義驗證函數：至少填寫一個電話號碼
  const validateAtLeastOnePhone = () => {
    const hasLandline = landlinePhone && landlinePhone.trim() !== "";
    const hasMobile = mobilePhone && mobilePhone.trim() !== "";

    // 如果當前欄位有值，或者另一個欄位有值，則通過驗證
    if (hasLandline || hasMobile) {
      return true;
    }
    return "請至少填寫一個電話號碼";
  };
  return (
    <>
      <div className="flex gap-1">
        <div>
          <label
            htmlFor="landlinePhone"
            className="text-paragraph flex items-center gap-1"
          >
            市話
          </label>
          <input
            className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
            id="landlinePhone"
            placeholder="ex: 02-12345678"
            {...register("landlinePhone", {
              pattern: {
                value: /^0\d{1,2}-\d{6,8}$/,
                message: "格式錯誤",
              },
              validate: validateAtLeastOnePhone,
            })}
          />
        </div>
        <div>
          <label
            htmlFor="mobilePhone"
            className="text-paragraph flex items-center gap-1"
          >
            手機
          </label>
          <input
            className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
            id="mobilePhone"
            placeholder="ex: 0912-345-678"
            {...register("mobilePhone", {
              pattern: {
                value: /^09\d{2}-\d{3}-\d{3}$/,
                message: "格式錯誤",
              },
              validate: validateAtLeastOnePhone,
            })}
          />
        </div>
      </div>
      {/* 顯示格式錯誤訊息 */}
      {errors.landlinePhone?.type === "pattern" && (
        <span className="w-full text-center text-label text-destructive">
          市話格式錯誤，請輸入正確格式 ex: 02-12345678
        </span>
      )}
      {errors.mobilePhone?.type === "pattern" && (
        <span className="w-full text-center text-label text-destructive">
          手機格式錯誤，請輸入正確格式 ex: 0912-345-678
        </span>
      )}

      {/* 顯示共同的驗證錯誤訊息（只顯示一次） */}
      {(errors.landlinePhone?.type === "validate" ||
        errors.mobilePhone?.type === "validate") && (
        <span className="w-full text-center text-label text-destructive">
          請至少填寫一個電話號碼
        </span>
      )}
    </>
  );
};

export default PhoneNumber;
