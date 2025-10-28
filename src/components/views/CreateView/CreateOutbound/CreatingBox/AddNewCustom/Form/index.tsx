import { useForm, SubmitHandler } from "react-hook-form";

import Name from "./Name";
import Address from "./Address";
import PhoneNumber from "./PhoneNumber";

import { FormDataType } from "./type";
import usePostCustomerApi from "@/api/supabase/customerApi/usePostCustomerApi";

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataType>();
  const { mutate: postCustomer } = usePostCustomerApi();
  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    postCustomer(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 bg-white rounded-md p-4 border-1 border-primary/10"
    >
      <h2 className="text-h2">新增客戶</h2>
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
