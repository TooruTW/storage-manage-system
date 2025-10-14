import { Box } from "lucide-react";
import { useAccountStore } from "@/stores/useAccountState";

const MainImage = () => {
  const isLoading = useAccountStore((state) => state.isLogin);

  return (
    <div className="size-1/3 min-w-70">
      <Box
        strokeWidth={0.3}
        className={`size-full ${
          isLoading === true
            ? "text-green-500"
            : isLoading === "checking"
            ? "text-primary"
            : "text-red-500"
        }`}
      />
    </div>
  );
};

export default MainImage;
