import { useState } from "react";
import Tab from "./Tab";
import Results from "./Results";
import { Search } from "lucide-react";

const SearchingResult = () => {
  const [currentTab, setCurrentTab] = useState<"all" | "purchaseHistory">(
    "purchaseHistory"
  );
  return (
    <>  
    <div className="relative"> 
    <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/50 size-4"/>
    <input
      type="text"
      className="border-1 border-primary/10 rounded-md py-1 px-3 shadow-xs w-full"
      placeholder="搜尋商品"
    />
  </div>
    <div className="flex flex-col gap-2 h-full  min-h-0">
      <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex-1 min-h-0">
        <Results currentTab={currentTab} />
      </div>
    </div>
    </>
  );
};

export default SearchingResult;
