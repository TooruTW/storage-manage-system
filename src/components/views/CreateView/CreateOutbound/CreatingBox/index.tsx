import { useState } from "react";
import SearchingResult from "./SearchingResult";
import SearchCustom from "./SearchCustom";
import AddNewCustom from "./AddNewCustom";
import { useForm } from "react-hook-form";
import { CreateOutbound } from "../type";
import { SubmitHandler } from "react-hook-form";

const CreatingBox = () => {
  const [isAddNewCustom, setIsAddNewCustom] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateOutbound>();

  const onSubmit: SubmitHandler<CreateOutbound> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-2 h-full w-fit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-h1">出貨</h1>
      <div
        className={`border-1 border-primary rounded-md p-4 shadow-xs flex-1 text-nowrap flex flex-col gap-2 relative overflow-hidden ${
          isAddNewCustom && "w-100"
        }`}
      >
        <SearchCustom setIsAddNewCustom={setIsAddNewCustom} control={control} />
        <SearchingResult />
        {isAddNewCustom && (
          <AddNewCustom setIsAddNewCustom={setIsAddNewCustom} />
        )}
      </div>
    </form>
  );
};

export default CreatingBox;
