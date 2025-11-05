import { useMemo, useState } from "react";

import dayjs from "dayjs";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";

import AddNewCustom from "./AddNewCustom";
import SearchCustom from "./SearchCustom";
import SearchingResult from "./SearchingResult";

import useCreateOutbound from "@/stores/useCreateOutbound";
import useLoading from "@/stores/useLoading";

import usePostOutboundApi from "@/api/supabase/outboundApi/usePostOutboundApi";

import { CreateOutbound } from "../type";

const CreatingBox = () => {
  const [isAddNewCustom, setIsAddNewCustom] = useState(false);
  const { handleSubmit, control, setValue, watch, formState } =
    useForm<CreateOutbound>();

  const addDataToLocalStorage = (data: CreateOutbound) => {
    let newDataDate = dayjs().format("YYYY-MM-DD");
    const prevData = useCreateOutbound.getState().createOutbound;

    if (prevData && prevData.length > 0) {
      newDataDate = prevData[prevData.length - 1].shipment_date;
    }

    const newData: CreateOutbound = {
      customer_id: data.customer_id,
      product_id: data.product_id,
      customer_name: data.customer_name,
      product_name: data.product_name,
      unit: data.unit,
      cost_per_unit: data.cost_per_unit,
      quantity: 0,
      price_per_unit: 0,
      shipment_date: newDataDate,
      total_price: 0,
      net_profit: 0,
      remark: "",
    };

    useCreateOutbound.getState().addCreateOutbound(newData);
    useCreateOutbound.getState().saveCreateOutbound();
  };

  const onSubmit: SubmitHandler<CreateOutbound> = (data) => {
    addDataToLocalStorage(data);
  };

  const { mutate: postOutbound } = usePostOutboundApi();
  const handleUpload = async () => {
    useLoading.getState().startLoading();
    const data = useCreateOutbound.getState().createOutbound;

    postOutbound(data, {
      onSuccess: () => {
        useCreateOutbound.getState().resetCreateOutbound();
        useCreateOutbound.getState().saveCreateOutbound();
        useLoading.getState().endLoading();
      },
      onError: (error) => {
        console.error("Post outbound error", error);
        alert("上傳失敗，請重新整理後再試");
        useLoading.getState().endLoading();
      },
    });
  };

  const activeStyle = useMemo(() => {
    return isAddNewCustom && "w-100";
  }, [isAddNewCustom]);

  return (
    <div className="flex flex-col gap-2 h-full w-fit">
      <div className=" flex items-center justify-between">
        <h1 className="text-h1 ">出貨</h1>
        <Button onClick={handleUpload}>上傳</Button>
      </div>
      <div
        className={`border-1 border-primary rounded-md p-4 shadow-xs flex-1 text-nowrap flex flex-col gap-2 relative overflow-hidden 
          ${activeStyle}`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchCustom
            setIsAddNewCustom={setIsAddNewCustom}
            control={control}
            setValue={setValue}
            error={formState.errors.customer_name}
          />
          <SearchingResult
            setValue={setValue}
            watch={watch}
            onSubmit={handleSubmit(onSubmit)}
          />
        </form>
        {isAddNewCustom && (
          <AddNewCustom setIsAddNewCustom={setIsAddNewCustom} />
        )}
      </div>
    </div>
  );
};

export default CreatingBox;
