import { useState } from "react";
import Results from "./Results";
import { Search } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../type";
import { Button } from "@/components/ui/button";

type SearchingResultProps = {
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
};

const SearchingResult = ({ setValue, onSubmit }: SearchingResultProps) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex flex-col justify-between h-full min-h-0">
      <div className="flex flex-col gap-2 border-1 border-primary/10 rounded-md py-2 px-4">
        <div className="flex justify-between items-center">
          <label className="text-paragraph " htmlFor="productName">
            新增商品
          </label>
          <Button>新增</Button>
        </div>

        <div className="flex gap-2">
          <input
            className="border-b-1 border-primary/10 flex-1"
            placeholder="商品名稱"
            type="text"
            id="productName"
            onBlur={(e) => setValue("productName", e.target.value)}
          />
          <input
            className="border-b-1 border-primary/10 flex-1"
            placeholder="單位"
            type="text"
            id="unit"
            onBlur={(e) => setValue("unit", e.target.value)}
          />
        </div>
      </div>
      <div className="relative">
        <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/50 size-4" />
        <input
          type="text"
          className="border-1 border-primary/10 rounded-md py-1 px-3 shadow-xs w-full"
          placeholder="搜尋商品"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <Results keyword={keyword} setValue={setValue} onSubmit={onSubmit} />
    </div>
  );
};

export default SearchingResult;
