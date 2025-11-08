import { useEffect, useState } from "react";
import { useGetSupplierApi } from "@/api/supabase/supplierApi/useGetSupplierApi";
import { SupplierType } from "@/types/SupplierType";
import useClickOutSide from "@/components/hook/useClickOutSide";
import { UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../../type";
import { Skeleton } from "@/components/ui/skeleton"

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  setValue: UseFormSetValue<CreateInbound>;
};

const SearchInput = ({ value, onChange, setValue }: SearchInputProps) => {
  const ref = useClickOutSide({ action: () => setIsOpen(false) });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: supplierData, isLoading: isLoadingSupplier } = useGetSupplierApi();
  const [supplierList, setSupplierList] = useState<SupplierType[]>([]);

  // init supplier list
  useEffect(() => {
    if (supplierData) {
      setSupplierList(supplierData);
    }
  }, [supplierData]);

  useEffect(() => {
    if (!supplierData) return;
    if (value === "") {
      setSupplierList(supplierData);
      return;
    }
    setSupplierList(
      supplierData.filter((supplier) => supplier.name.includes(value))
    );
  }, [value, supplierData]);

  const handleSelectSupplier = (supplier: SupplierType) => {
    onChange(supplier.name);
    setValue("supplier_id", supplier.id);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full">
      <input
        type="text"
        className="border-b-1 border-primary/10 py-1 px-2 shadow-xs w-full"
        placeholder="請輸入進貨商名稱"
        value={value}
        name="supplier_search_keyword"
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {isOpen && isLoadingSupplier && (
        <div className="w-full h-fit absolute left-0 top-full border-1 border-primary rounded-md bg-white z-10 flex justify-center items-center p-2">
          <Skeleton className="w-full h-8" />
        </div>
      )}
      {isOpen && !isLoadingSupplier && (
        <div className="w-full h-fit max-h-200 overflow-y-auto absolute left-0 top-full translate-y-2 divide-y-1 divide-primary/10 border-1 border-primary rounded-md bg-white z-10 text-center">
          {supplierList.map((supplier) => (
            <p
              key={supplier.id}
              onClick={() => handleSelectSupplier(supplier)}
              className="text-paragraph py-2 hover:bg-primary/10 cursor-pointer"
            >
              {supplier.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
