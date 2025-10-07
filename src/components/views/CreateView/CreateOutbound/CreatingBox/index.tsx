import { useState } from "react";
import SearchingResult from "./SearchingResult";
import SearchCustom from "./SearchCustom";
import AddNewCustom from "./AddNewCustom";
import { useForm } from "react-hook-form";
import { CreateOutbound } from "../type";
import { SubmitHandler } from "react-hook-form";
import dayjs from "dayjs";
import useCreateOutbound from "@/stores/useCreateOutbound";

const CreatingBox = () => {
  const [isAddNewCustom, setIsAddNewCustom] = useState(false);
  const { handleSubmit, control, setValue } = useForm<CreateOutbound>();

  const addDataToLocalStorage = (data: CreateOutbound) => {
    let newDataDate = dayjs().format("YYYY-MM-DD");
    const prevData = useCreateOutbound.getState().createOutbound;

    if(prevData && prevData.length > 0){
      newDataDate = prevData[prevData.length - 1].shipmentDate;
    }

    const newData: CreateOutbound = {
      customerName: data.customerName,
      productName: data.productName,
      unit: data.unit,
      costPerUnit: data.costPerUnit,
      quantity: 0,
      pricePerUnit: 0,
      shipmentDate: newDataDate,
      totalPrice: 0,
      netProfit: 0,
      remark: "",
    };

    useCreateOutbound.getState().addCreateOutbound(newData);
    useCreateOutbound.getState().saveCreateOutbound();
  };

  const onSubmit: SubmitHandler<CreateOutbound> = (data) => {
    addDataToLocalStorage(data);
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
        <SearchingResult
          setValue={setValue}
          onSubmit={handleSubmit(onSubmit)}
        />
        {isAddNewCustom && (
          <AddNewCustom setIsAddNewCustom={setIsAddNewCustom} />
        )}
      </div>
    </form>
  );
};

export default CreatingBox;
