import { useForm, SubmitHandler } from "react-hook-form";
import Name from "./Name";
import { FormDataType } from "./type";
import Address from "./Address";
import PhoneNumber from "./PhoneNumber";

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataType>();
  const onSubmit: SubmitHandler<FormDataType> = (data) => console.log(data);


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white rounded-md p-4 border-1 border-primary/10"
    >
      <h2 className="text-h2">新增客戶</h2>
      {/* register your input into the hook by invoking the "register" function */}
      <Name register={register} errors={errors} />
      <Address register={register} errors={errors} />
      <PhoneNumber register={register} errors={errors} control={control} />
      <input
        type="submit"
        className="bg-primary/20 hover:bg-primary/30 rounded-md px-2 py-1"
      />
    </form>
  );
}
