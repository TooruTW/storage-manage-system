import { usePopupStore } from "@/stores/usePopupStore";

const PopupContainer = () => {
  const { isOpen, content } = usePopupStore();

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex justify-center items-center">
        {content}
      </div>
    )
  );
};

export default PopupContainer;
