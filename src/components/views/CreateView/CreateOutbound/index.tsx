import CreatingBox from "./CreatingBox";
const CreateOutbound = () => {
  return (
    <div className="h-full w-full flex gap-2">
      <div className="flex flex-col gap-2 h-full w-fit">
        <CreatingBox />
      </div>
      <div className="w-full h-full border-1 border-primary rounded-md shadow-xs"></div>
    </div>
  );
};

export default CreateOutbound;
