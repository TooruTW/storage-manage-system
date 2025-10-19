import { useState } from "react";
import SearchingResult from "./SearchingResult";
import SearchSupplier from "./SearchSupplier";
import AddNewSupplier from "./AddNewSupplier";
import { useForm } from "react-hook-form";
import { CreateInbound } from "../type";
import { SubmitHandler } from "react-hook-form";
import useCreateInbound from "@/stores/useCreateInbound";
import { Button } from "@/components/ui/button";
import useLoading from "@/stores/useLoading";
import dayjs from "dayjs";

const CreatingBox = () => {
  const [isAddNewSupplier, setIsAddNewSupplier] = useState(false);
  const { handleSubmit, control, setValue, formState } =
    useForm<CreateInbound>();

  // 新增資料到本地儲存
  const addDataToLocalStorage = (data: CreateInbound) => {
    let newDataDate = dayjs().format("YYYY-MM-DD");
    const prevData = useCreateInbound.getState().createInbound;

    if (prevData && prevData.length > 0) {
      newDataDate = prevData[prevData.length - 1].last_inbound_date;
    }

    const newData: CreateInbound = {
      supplier_id: data.supplier_id,
      product_id: data.product_id,
      supplier_name: data.supplier_name,
      product_name: data.product_name,
      unit: data.unit,
      quantity: 0,
      price_per_unit: data.price_per_unit,
      total_price: 0,
      remark: "",
      last_inbound_date: newDataDate,
    };

    useCreateInbound.getState().addCreateInbound(newData);
    useCreateInbound.getState().saveCreateInbound();
  };

  // 提交表單
  const onSubmit: SubmitHandler<CreateInbound> = (data) => {
    addDataToLocalStorage(data);
  };

  // 上傳資料
  const handleUpload = async () => {
    useLoading.getState().startLoading();
    const data = useCreateInbound.getState().createInbound;
    console.log("上傳");
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    useCreateInbound.getState().resetCreateInbound();
    useCreateInbound.getState().saveCreateInbound();
    useLoading.getState().endLoading();
  };

  return (
    <div className="flex flex-col gap-2 h-full w-fit">
      <div className=" flex items-center justify-between">
        <h1 className="text-h1 ">進貨</h1>
        <Button onClick={handleUpload}>上傳</Button>
      </div>
      <div
        className={`border-1 border-primary rounded-md p-4 shadow-xs flex-1 text-nowrap flex flex-col gap-2 relative overflow-hidden w-100`}
      >
        <p
          onClick={() => setIsAddNewSupplier(true)}
          className="text-label underline underline-offset-4 decoration-inherit text-right text-primary/50 hover:text-primary/70 cursor-pointer"
        >
          找不到進貨商嗎？按此新增進貨商
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SearchSupplier
            control={control}
            setValue={setValue}
            error={formState.errors.supplier_name}
          />
          <SearchingResult
            setValue={setValue}
            onSubmit={handleSubmit(onSubmit)}
          />
        </form>
        {isAddNewSupplier && (
          <AddNewSupplier setIsAddNewSupplier={setIsAddNewSupplier} />
        )}
      </div>
    </div>
  );
};

export default CreatingBox;
