import { FormComponentProps } from "../type";

const Name = ({ register, errors }: FormComponentProps) => {
  return (
    <div className="flex gap-1">
      <div>
        <label
          htmlFor="storeName"
          className="text-paragraph flex items-center gap-1"
        >
          店名
          {errors.storeName?.type === "required" && (
            <span className="text-label text-destructive">此為必填</span>
          )}
          {errors.storeName?.type === "pattern" && (
            <span className="text-label text-destructive">
              格式錯誤，請輸入「地名 店名」
            </span>
          )}
        </label>
        <input
          className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
          id="storeName"
          placeholder="ex: 地區 店名"
          {...register("storeName", {
            required: true,
            pattern: {
              value: /^[\u4e00-\u9fa5]+ .+$/,
              message: "格式錯誤，請輸入「地名 店名」（地名只能使用中文）",
            },
          })}
        />
      </div>
      <div>
        <label
          htmlFor="contactPerson"
          className="text-paragraph flex items-center gap-1"
        >
          聯絡人
        </label>
        <input
          className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
          id="contactPerson"
          placeholder="輸入聯絡人名稱"
          {...register("contactPerson")}
        />
      </div>
    </div>
  );
};

export default Name;
