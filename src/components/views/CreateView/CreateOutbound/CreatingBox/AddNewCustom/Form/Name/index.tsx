import { FormComponentProps } from "../type";

const Name = ({ register, errors }: FormComponentProps) => {
  return (
    <div className="flex gap-1">
      <div>
        <label
          htmlFor="name"
          className="text-paragraph flex items-center gap-1"
        >
          店名
          {errors.name?.type === "required" && (
            <span className="text-label text-destructive">此為必填</span>
          )}
          {errors.name?.type === "pattern" && (
            <span className="text-label text-destructive">
              格式錯誤，請輸入「地名 店名」
            </span>
          )}
        </label>
        <input
          className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
          id="name"
          placeholder="ex: 地區 店名"
          {...register("name", {
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
          htmlFor="contact_person"
          className="text-paragraph flex items-center gap-1"
        >
          聯絡人
        </label>
        <input
          className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
          id="contact_person"
          placeholder="輸入聯絡人名稱"
          {...register("contact_person")}
        />
      </div>
    </div>
  );
};

export default Name;
