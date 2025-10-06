import { useState } from "react";
import Tab from "./Tab";
import Results from "./Results";

const SearchingResult = () => {
  const [currentTab, setCurrentTab] = useState<"all" | "purchaseHistory">(
    "purchaseHistory"
  );
  return (
    <div className="flex flex-col gap-2 h-full  min-h-0">
      <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex-1 min-h-0">
        <Results currentTab={currentTab} />
      </div>
    </div>
  );
};

export default SearchingResult;
