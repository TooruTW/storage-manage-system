import Tabs from "./Tabs";
import CenterSection from "./CenterSection";
import { ArrowUp } from "lucide-react";

const DatabaseView = () => {
  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="max-w-400 w-full h-full flex flex-col gap-7 items-center pb-4">
      <div className="w-full flex-shrink-0">
        <Tabs />
      </div>
      <div className="flex-1 w-full min-h-0">
        <CenterSection />
      </div>
      <div onClick={handleGoTop} className="size-10 aspect-square rounded-full bg-primary/10 opacity-50 hover:opacity-100 transition-all active:scale-95 flex items-center justify-center fixed bottom-5 right-10">
        <ArrowUp className="size-8 text-primary/80" />
      </div>
    </div>
  );
};

export default DatabaseView;
