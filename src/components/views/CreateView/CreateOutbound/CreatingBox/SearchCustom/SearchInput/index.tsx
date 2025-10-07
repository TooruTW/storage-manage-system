import { useEffect, useState } from "react";
import { FAKE_CUSTOM_LIST } from "../constants/FAKE_CUSTOM_LIST";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const [customList, setCustomList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setCustomList(FAKE_CUSTOM_LIST.filter((custom) => custom.includes(value)));
  }, [value]);

  return (
    <div className="relative w-full">
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
              key={custom}
              onClick={() => {
                onChange(custom);
                setIsOpen(false);
              }}
              className="text-paragraph py-2 hover:bg-primary/10 cursor-pointer"
            >
              {custom}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
