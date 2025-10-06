import SearchingResult from "./SearchingResult";
import SearchCustom from "./SearchCustom";

const CreatingBox = () => {
  return (
    <div className="border-1 border-primary rounded-md p-4 shadow-xs h-full text-nowrap flex flex-col gap-2  w-fit ">
      <SearchCustom />
      <SearchingResult />
    </div>
  );
};

export default CreatingBox;
