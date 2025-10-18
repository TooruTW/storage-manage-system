import { usePopoutStore } from "@/stores/usePopoutStore";

const PopoutContainer = () => {
  const { isOpen, content } = usePopoutStore();

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex justify-center items-center">
        {content}
      </div>
    )
  );
};

export default PopoutContainer;
