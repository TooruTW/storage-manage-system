import Menu from "./Menu";
import SearchArea from "./SearchArea";
import ResultArea from "./ResultArea";
import { ArrowLeft } from 'lucide-react';


const MobileDatabaseView = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 relative">
      <Menu />
      <SearchArea />
      <ResultArea />
      <ArrowLeft className="size-10 absolute left-0 bottom-4 rounded-full bg-primary/10 p-2 shadow-md" />
    </div>
  );
};

export default MobileDatabaseView;
