import Tabs from "./Tabs";
import CenterSection from "./CenterSection";

const DatabaseView = () => {
  return (
    <div className="max-w-400 w-full h-full flex flex-col gap-7 items-center pb-4">
      <div className="w-full flex-shrink-0">
        <Tabs />
      </div>
      <div className="flex-1 w-full min-h-0">
        <CenterSection />
      </div>
    </div>
  );
};

export default DatabaseView;
