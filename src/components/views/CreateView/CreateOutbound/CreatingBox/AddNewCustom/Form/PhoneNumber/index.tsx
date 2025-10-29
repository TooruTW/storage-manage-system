import { FormComponentProps } from "../type";
import { useWatch } from "react-hook-form";

const PhoneNumber = ({ register, errors, control }: FormComponentProps) => {
  // 監聽兩個電話欄位的值
  const landline_phone = useWatch({ control, name: "landline_phone" });
  const mobile_phone = useWatch({ control, name: "mobile_phone" });

  // 自定義驗證函數：至少填寫一個電話號碼
  const validateAtLeastOnePhone = () => {
    const hasLandline = landline_phone && landline_phone.trim() !== "";
    const hasMobile = mobile_phone && mobile_phone.trim() !== "";

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
            htmlFor="landline_phone"
            className="text-paragraph flex items-center gap-1"
          >
            市話
          </label>
          <input
            className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
            id="landline_phone"
            placeholder="ex: 02-12345678"
            {...register("landline_phone", {
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
            htmlFor="mobile_phone"
            className="text-paragraph flex items-center gap-1"
          >
            手機
          </label>
          <input
            className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
            id="mobile_phone"
            placeholder="ex: 0912-345-678"
            {...register("mobile_phone", {
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
      {errors.landline_phone?.type === "pattern" && (
        <span className="w-full text-center text-label text-destructive">
          市話格式錯誤，請輸入正確格式 ex: 02-12345678
        </span>
      )}
      {errors.mobile_phone?.type === "pattern" && (
        <span className="w-full text-center text-label text-destructive">
          手機格式錯誤，請輸入正確格式 ex: 0912-345-678
        </span>
      )}

      {/* 顯示共同的驗證錯誤訊息（只顯示一次） */}
      {(errors.landline_phone?.type === "validate" ||
        errors.mobile_phone?.type === "validate") && (
        <span className="w-full text-center text-label text-destructive">
          請至少填寫一個電話號碼
        </span>
      )}
    </>
  );
};

export default PhoneNumber;
