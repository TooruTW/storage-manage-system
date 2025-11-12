import { useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";

import Tab from "./Tab";
import ManualAdd from "./ManualAdd";
import SearchProduct from "./SearchProduct";

import { CreateInbound } from "../../type";
import { TabOption } from "./Tab/constants";

type SearchingResultProps = {
  setValue: UseFormSetValue<CreateInbound>;
  onSubmit: () => void;
  getValues: UseFormGetValues<CreateInbound>;
};

const SearchingResult = ({
  setValue,
  onSubmit,
  getValues,
}: SearchingResultProps) => {
  const [activeTab, setActiveTab] = useState<TabOption>("search");

  return (
    <div className="flex flex-col h-full min-h-0 gap-4">
      <Tab activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 min-h-0">
        {activeTab === "search" ? (
          <SearchProduct setValue={setValue} onSubmit={onSubmit} />
        ) : (
          <ManualAdd
            setValue={setValue}
            onSubmit={onSubmit}
            getValues={getValues}
          />
        )}
      </div>
    </div>
  );
};

export default SearchingResult;
