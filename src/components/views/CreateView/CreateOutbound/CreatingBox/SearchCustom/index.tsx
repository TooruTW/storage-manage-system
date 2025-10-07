import { useEffect, useState } from "react";
import { FAKE_CUSTOM_LIST } from "./constants/FAKE_CUSTOM_LIST";
import { Control } from "react-hook-form";
import { CreateOutbound } from "../../type";

type SearchCustomProps = {
  setIsAddNewCustom: (isAddNewCustom: boolean) => void;
  control: Control<CreateOutbound>;
};

const SearchCustom = ({ setIsAddNewCustom, control }: SearchCustomProps) => {
  const [customList, setCustomList] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    setCustomList(
      FAKE_CUSTOM_LIST.filter((custom) => custom.includes(keyword))
    );
  }, [keyword]);

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
        <input
          type="text"
          className="border-b-1 border-primary/10 py-1 px-2 shadow-xs w-full"
          placeholder="請輸入客戶名稱"
          value={keyword}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        {isOpen && (
          <div className="w-full h-fit max-h-200 overflow-y-auto absolute left-0 top-full translate-y-2 divide-y-1 divide-primary/10 border-1 border-primary rounded-md bg-white z-10 text-center">
            {customList.map((custom) => (
              <p
                key={custom}
                onClick={() => {
                  setKeyword(custom);
                  control._formValues.customerName = custom;
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
    </div>
  );
};

export default SearchCustom;
