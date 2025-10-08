import { FormComponentProps } from "../type";

const Address = ({ register, errors }: FormComponentProps) => {
  return (
    <div >
      <label
        htmlFor="address"
        className="text-paragraph flex items-center gap-1"
      >
        地址
        {errors.address?.type === "required" && (
          <span className="text-label text-destructive">地址為必填</span>
        )}
      </label>
      <input
        className="border-1 rounded-md px-2 py-1 border-primary/10 text-label w-full"
        id="address"
        placeholder="ex: 台北市信義區信義路五段7號之1"
        {...register("address")}
      />
    </div>
  );
};

export default Address;
