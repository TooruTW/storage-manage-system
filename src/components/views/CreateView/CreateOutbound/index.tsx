import CreatingBox from "./CreatingBox";
const CreateOutbound = () => {
  return (
    <div className="h-full w-full flex gap-2 rounded-md shadow-xs">
      <CreatingBox />
      <div className="w-full h-full border-1 border-primary rounded-md shadow-xs"></div>
    </div>
  );
};

export default CreateOutbound;
