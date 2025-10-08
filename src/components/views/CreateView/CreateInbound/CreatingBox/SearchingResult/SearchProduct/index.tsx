import { useState } from "react";
import { Search } from "lucide-react";
import { UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../../type";
import Results from "../Results";

type SearchProductProps = {
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
};

const SearchProduct = ({ setValue, onSubmit }: SearchProductProps) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex flex-col gap-4">
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

export default SearchProduct;
