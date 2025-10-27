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
              格式錯誤，只能使用中文
            </span>
          )}
        </label>
        <input
          className="border-1 rounded-md px-2 py-1 border-primary/10 text-label"
          id="name"
          placeholder="ex: 示範進貨商"
          {...register("name", {
            required: true,
            pattern: {
              value: /^[\u4e00-\u9fa5]+$/,
              message: "格式錯誤，只能使用中文",
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
          id="contactPerson"
          placeholder="輸入聯絡人名稱"
          {...register("contact_person")}
        />
      </div>
    </div>
  );
};

export default Name;
