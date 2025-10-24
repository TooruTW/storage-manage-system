import { Box } from "lucide-react";
const ConditionRequired = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <Box className="size-30" strokeWidth={0.5} />
      <h2 className="text-h2 font-normal">請輸入篩選條件</h2>
    </div>
  );
};

export default ConditionRequired;