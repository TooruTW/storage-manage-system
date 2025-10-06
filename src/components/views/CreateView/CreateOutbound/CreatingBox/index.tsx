import { useState } from "react";
import SearchingResult from "./SearchingResult";
import SearchCustom from "./SearchCustom";
import AddNewCustom from "./AddNewCustom";

const CreatingBox = () => {
  const [isAddNewCustom, setIsAddNewCustom] = useState(false);
  return (
    <div className="border-1 border-primary rounded-md p-4 shadow-xs h-full text-nowrap flex flex-col gap-2  w-fit relative min-w-75 overflow-hidden">
      <SearchCustom setIsAddNewCustom={setIsAddNewCustom} />
      <SearchingResult />
      {isAddNewCustom && <AddNewCustom setIsAddNewCustom={setIsAddNewCustom} />}
    </div>
  );
};

export default CreatingBox;
