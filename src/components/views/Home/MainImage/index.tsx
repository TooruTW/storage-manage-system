import { useMemo } from "react";

import { Box } from "lucide-react";

import { useAccountStore } from "@/stores/useAccountState";

const MainImage = () => {
  const loginState = useAccountStore((state) => state.loginState);
  const stateStyle = useMemo(()=>{
    switch(loginState){
      case "success":
        return "text-green-500";
      case "checking":
        return "text-primary";
      case "failed":
        return "text-red-500";
    }
    
  },[loginState])

  return (
    <div className="size-1/3 min-w-70">
      <Box
        strokeWidth={0.3}
        className={`size-full ${stateStyle}`}
      />
    </div>
  );
};

export default MainImage;
