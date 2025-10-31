import { useForm, SubmitHandler } from "react-hook-form";

import Name from "./Name";
import Address from "./Address";
import PhoneNumber from "./PhoneNumber";

import { FormDataType } from "./type";
import usePostSupplierApi from "@/api/supabase/supplierApi/usePostSupplierApi";

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormDataType>();

  const { mutate: postSupplier } = usePostSupplierApi();
  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    postSupplier(data,{
      onSuccess: () => {
        alert("新增成功" +"  "+ data.name);
        reset();
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white rounded-md p-4 border-1 border-primary/10"
    >
      <h2 className="text-h2">新增進貨商</h2>
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
