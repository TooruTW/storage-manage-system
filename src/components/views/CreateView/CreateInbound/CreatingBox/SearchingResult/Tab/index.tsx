import { useCallback } from "react";
import { TabOption, TAB_OPTIONS } from "./constants";

type TabProps = {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
};

const Tab = ({ activeTab, onTabChange }: TabProps) => {
  const activeStyle = useCallback(
    (value: TabOption) => {
      const style = "border-b-2 border-primary text-primary font-medium";
      const inactiveStyle = "text-primary/50 hover:text-primary/70";
      return activeTab === value ? style : inactiveStyle;
    },
    [activeTab]
  );
  return (
    <div className="flex gap-2 border-b-1 border-primary/10">
      {TAB_OPTIONS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={`px-4 py-2 text-paragraph transition-colors ${
            activeStyle(tab.value)
          }`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
