import {
  Control,
  Controller,
  FieldError,
  UseFormSetValue,
} from "react-hook-form";
import { CreateOutbound } from "../../type";
import SearchInput from "./SearchInput";
import { useEffect } from "react";

type SearchCustomProps = {
  setIsAddNewCustom: (isAddNewCustom: boolean) => void;
  control: Control<CreateOutbound>;
  setValue: UseFormSetValue<CreateOutbound>;
  error?: FieldError;
};

const SearchCustom = ({
  setIsAddNewCustom,
  control,
  setValue,
  error,
}: SearchCustomProps) => {
  useEffect(() => {
    if (error) {
      console.error("SearchCustom error:", error);
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-1">
      <p
        onClick={() => setIsAddNewCustom(true)}
        className="text-label underline underline-offset-4 decoration-inherit text-right text-primary/50 hover:text-primary/70 cursor-pointer"
      >
        找不到客戶嗎？按此新增客戶
      </p>

      <div className="flex gap-2 w-full relative">
        <h2 className="text-h2">客戶：</h2>
        <div className="flex flex-col gap-1 flex-1">
          <Controller
            name="customer_name"
            control={control}
            rules={{
              required: "請選擇客戶",
            }}
            render={({ field }) => (
              <SearchInput
                value={field.value || ""}
                onChange={field.onChange}
                setValue={setValue}
              />
            )}
          />
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchCustom;
