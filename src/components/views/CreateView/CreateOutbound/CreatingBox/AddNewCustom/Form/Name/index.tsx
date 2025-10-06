import { FormComponentProps } from "../type";

const Name = ({ register, errors }: FormComponentProps) => {
  return (
    <div className="flex flex-col gap-1">
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
  );
};

export default Name;
