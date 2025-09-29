import Tabs from "./Tabs";
import CenterSection from "./CenterSection";

const DatabaseView = () => {
  return (
    <div className="max-w-400 w-full flex flex-col gap-7 items-center">
      <div className="w-full">
        <Tabs />
      </div>
      <CenterSection />
    </div>
  );
};

export default DatabaseView;
