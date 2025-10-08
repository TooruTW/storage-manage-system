import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { CreateInbound } from "../../type";
import Tab from "./Tab";
import { TabOption } from "./Tab/constants";
import ManualAdd from "./ManualAdd";
import SearchProduct from "./SearchProduct";

type SearchingResultProps = {
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
};

const SearchingResult = ({ setValue, onSubmit }: SearchingResultProps) => {
  const [activeTab, setActiveTab] = useState<TabOption>("search");

  return (
    <div className="flex flex-col h-full min-h-0 gap-4">
      <Tab activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 min-h-0">
        {activeTab === "search" ? (
          <SearchProduct setValue={setValue} onSubmit={onSubmit} />
        ) : (
          <ManualAdd setValue={setValue} onSubmit={onSubmit} />
        )}
      </div>
    </div>
  );
};

export default SearchingResult;
