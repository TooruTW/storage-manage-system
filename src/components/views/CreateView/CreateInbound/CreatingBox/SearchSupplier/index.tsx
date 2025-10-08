import { Control, Controller, FieldError } from "react-hook-form";
import { CreateInbound } from "../../type";
import SearchInput from "./SearchInput";

type SearchSupplierProps = {
  control: Control<CreateInbound>;
  error?: FieldError;
};

const SearchSupplier = ({ control, error }: SearchSupplierProps) => {
  return (
    <div>
      <div className="flex gap-2 w-full relative">
        <h2 className="text-h2">進貨商：</h2>
        <div className="flex flex-col gap-1 flex-1">
          <Controller
            name="supplierName"
            control={control}
            rules={{
              required: "請選擇進貨商",
            }}
            render={({ field }) => (
              <SearchInput
                value={field.value || ""}
                onChange={field.onChange}
              />
            )}
          />
          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default SearchSupplier;
