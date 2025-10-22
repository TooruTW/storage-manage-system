import CreatingBox from "./CreatingBox";
import TableBox from "./TableBox";

const CreateInbound = () => {
  return (
    <div className="h-full w-full flex gap-2 rounded-md shadow-xs">
      <CreatingBox />
      <TableBox />
    </div>
  );
};

export default CreateInbound;
