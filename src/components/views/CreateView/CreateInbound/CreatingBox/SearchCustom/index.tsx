import { Control, Controller } from "react-hook-form";
import { CreateOutbound } from "../../type";
import SearchInput from "./SearchInput";

type SearchCustomProps = {
  setIsAddNewCustom: (isAddNewCustom: boolean) => void;
  control: Control<CreateOutbound>;
};

const SearchCustom = ({ setIsAddNewCustom, control }: SearchCustomProps) => {
  return (
    <div className="">
      <p
        onClick={() => setIsAddNewCustom(true)}
        className="text-label underline underline-offset-4 decoration-inherit text-right text-primary/50 hover:text-primary/70 cursor-pointer"
      >
        找不到客戶嗎？按此新增客戶
      </p>
      <div className="flex gap-2 w-full relative">
        <h2 className="text-h2">客戶：</h2>
        <Controller
          name="customerName"
          control={control}
          rules={{
            required: "請選擇客戶",
          }}
          render={({ field }) => (
            <SearchInput value={field.value || ""} onChange={field.onChange} />
          )}
        />
      </div>
    </div>
  );
};

export default SearchCustom;
