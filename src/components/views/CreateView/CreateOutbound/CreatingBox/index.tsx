import { useState } from "react";
import SearchingResult from "./SearchingResult";
import SearchCustom from "./SearchCustom";
import AddNewCustom from "./AddNewCustom";

const CreatingBox = () => {
  const [isAddNewCustom, setIsAddNewCustom] = useState(false);
  return (
    <div className="flex flex-col gap-2 h-full w-fit">
      <h1 className="text-h1">出貨</h1>
      <div
        className={`border-1 border-primary rounded-md p-4 shadow-xs flex-1 text-nowrap flex flex-col gap-2 relative overflow-hidden ${
          isAddNewCustom && "w-100"
        }`}
      >
        <SearchCustom setIsAddNewCustom={setIsAddNewCustom} />
        <SearchingResult />
        {isAddNewCustom && (
          <AddNewCustom setIsAddNewCustom={setIsAddNewCustom} />
        )}
      </div>
    </div>
  );
};

export default CreatingBox;
