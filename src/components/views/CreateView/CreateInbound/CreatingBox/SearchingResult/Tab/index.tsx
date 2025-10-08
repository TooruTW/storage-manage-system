import { TabOption, TAB_OPTIONS } from "./constants";

type TabProps = {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
};

const Tab = ({ activeTab, onTabChange }: TabProps) => {
  return (
    <div className="flex gap-2 border-b-1 border-primary/10">
      {TAB_OPTIONS.map((tab) => (
        <button
          key={tab.value}
          type="button"
          className={`px-4 py-2 text-paragraph transition-colors ${
            activeTab === tab.value
              ? "border-b-2 border-primary text-primary font-medium"
              : "text-primary/50 hover:text-primary/70"
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
