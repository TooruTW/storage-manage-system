import { useCallback } from "react";
import { OUTBOUND_SEARCHING_TAB } from "./constants";

type TabProps = {
  currentTab: "all" | "purchaseHistory";
  setCurrentTab: (tab: "all" | "purchaseHistory") => void;
};

const Tab = ({ currentTab, setCurrentTab }: TabProps) => {
  const activeStyle = useCallback(
    (id: "all" | "purchaseHistory") => {
      const style = "bg-primary-foreground shadow-xs";
      return currentTab === id && style;
    },
    [currentTab]
  );

  return (
    <div className="grid grid-cols-2 gap-2 p-1 border-2 rounded-md bg-primary/10 w-full ">
      {OUTBOUND_SEARCHING_TAB.map((item) => (
        <div
          key={item.id}
          className={`rounded-md px-3 py-1 border-2 text-center hover:bg-primary-foreground/50 cursor-pointer 
            ${activeStyle(item.id)}`}
          onClick={() => setCurrentTab(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
