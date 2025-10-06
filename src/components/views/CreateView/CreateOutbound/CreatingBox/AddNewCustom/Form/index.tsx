import { useForm, SubmitHandler } from "react-hook-form";
import Name from "./Name";
import { FormDataType } from "./type";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormDataType>();
  const onSubmit: SubmitHandler<FormDataType> = (data) => console.log(data);

  console.log(watch("storeName")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 bg-white rounded-md p-4 border-1 border-primary/10"
    >
      <h2 className="text-h2">新增客戶</h2>
      {/* register your input into the hook by invoking the "register" function */}
      <Name register={register} errors={errors} />

      <input type="submit" />
    </form>
  );
}
