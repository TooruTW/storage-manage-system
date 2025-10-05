import { Search } from "lucide-react";
import SearchingResult from "./SearchingResult";

const CreatingBox = () => {
  return (
    <div className="border-1 border-primary rounded-md p-4 shadow-xs h-full text-nowrap flex flex-col gap-2">
      <p className="text-label underline underline-offset-4 decoration-inherit text-right text-primary/50 hover:text-primary/70 cursor-pointer">
        找不到客戶嗎？按此新增客戶
      </p>
      <div className="flex gap-2 w-full">
        <h2 className="text-h2">客戶：</h2>
        <input
          type="text"
          className="border-b-1 border-primary py-1 px-2 shadow-xs"
          placeholder="請輸入客戶名稱"
        />
      </div>
      <div className="relative"> 
        <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-primary/50 size-4"/>
        <input
          type="text"
          className="border-1 border-primary/10 rounded-md py-1 px-3 shadow-xs w-full"
          placeholder="搜尋商品"
        />
      </div>
      <SearchingResult />
    </div>
  );
};

export default CreatingBox;
