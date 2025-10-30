import { useEffect, useState } from "react";
import {
  useGetCustomerApi,
} from "@/api/supabase/customerApi/useGetCustomerApi";
import useClickOutSide from "@/components/hook/useClickOutSide";
import { UseFormSetValue } from "react-hook-form";
import { CreateOutbound } from "../../../type";
import { CustomerType } from "@/types/CustomerType";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  setValue: UseFormSetValue<CreateOutbound>;
};

const SearchInput = ({ value, onChange, setValue }: SearchInputProps) => {
  const { data: customerData } = useGetCustomerApi();
  const [customList, setCustomList] = useState<CustomerType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useClickOutSide({ action: () => setIsOpen(false) });
  // init customer list
  useEffect(() => {
    if (customerData) {
      setCustomList(customerData);
    }
  }, [customerData]);

  useEffect(() => {
    if (!customerData) return;
    if (value === "") {
      setCustomList(customerData);
      return;
    }
    setCustomList(
      customerData.filter((customer) => customer.name.includes(value))
    );
  }, [value, customerData]);

  const handleSelectCustomer = (customer: CustomerType) => {
    onChange(customer.name);
    setValue("customer_id", customer.id);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-full">
      <input
        type="text"
        className="border-b-1 border-primary/10 py-1 px-2 shadow-xs w-full"
        placeholder="請輸入客戶名稱"
        value={value}
        onFocus={() => setIsOpen(true)}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      {isOpen && (
        <div className="w-full h-fit max-h-200 overflow-y-auto absolute left-0 top-full translate-y-2 divide-y-1 divide-primary/10 border-1 border-primary rounded-md bg-white z-10 text-center">
          {customList.map((custom) => (
            <p
              key={custom.id}
              onClick={() => handleSelectCustomer(custom)}
              className="text-paragraph py-2 hover:bg-primary/10 cursor-pointer"
            >
              {custom.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
