import { Control, Controller } from "react-hook-form";
import { CreateInbound } from "../../type";
import SearchInput from "./SearchInput";

type SearchSupplierProps = {
  control: Control<CreateInbound>;
};

const SearchSupplier = ({ control }: SearchSupplierProps) => {
  return (
    <div>

      <div className="flex gap-2 w-full relative">
        <h2 className="text-h2">進貨商：</h2>
        <Controller
          name="supplierName"
          control={control}
          rules={{
            required: "請選擇進貨商",
          }}
          render={({ field }) => (
            <SearchInput value={field.value || ""} onChange={field.onChange} />
          )}
        />
      </div>
    </div>
  );
};

export default SearchSupplier;
