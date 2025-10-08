import { useEffect, useState } from "react";
import { FAKE_SUPPLIER_LIST } from "../constants/FAKE_Supplier_LIST";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const [supplierList, setSupplierList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setSupplierList(FAKE_SUPPLIER_LIST.filter((supplier) => supplier.includes(value)));
    }, [value]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border-b-1 border-primary/10 py-1 px-2 shadow-xs w-full"
        placeholder="請輸入進貨商名稱"
        value={value}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {isOpen && (
        <div className="w-full h-fit max-h-200 overflow-y-auto absolute left-0 top-full translate-y-2 divide-y-1 divide-primary/10 border-1 border-primary rounded-md bg-white z-10 text-center">
          {supplierList.map((supplier) => (
            <p
              key={supplier}
              onClick={() => {
                onChange(supplier);
                setIsOpen(false);
              }}
              className="text-paragraph py-2 hover:bg-primary/10 cursor-pointer"
            >
              {supplier}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
