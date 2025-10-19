import { useState } from "react";
import Tab from "./Tab";
import Results from "./Results";
import { Search } from "lucide-react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { CreateOutbound } from "../../type";

type SearchingResultProps = {
  setValue: UseFormSetValue<CreateOutbound>;
  watch: UseFormWatch<CreateOutbound>;
  onSubmit: () => void;
};

const SearchingResult = ({
  setValue,
  watch,
  onSubmit,
}: SearchingResultProps) => {
  const [currentTab, setCurrentTab] = useState<"all" | "purchaseHistory">(
    "purchaseHistory"
  );
  const [keyword, setKeyword] = useState("");

  return (
    <div className="flex flex-col justify-between h-full min-h-0">
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
      <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Results
        currentTab={currentTab}
        keyword={keyword}
        setValue={setValue}
        watch={watch}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default SearchingResult;
