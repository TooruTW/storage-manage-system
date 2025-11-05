import { ArrowUp } from "lucide-react";

type ScrollTopBtnProps = {
  targetRef: React.RefObject<HTMLDivElement | null>;
};
const ScrollTopBtn = ({ targetRef }: ScrollTopBtnProps) => {
  const handleGoTop = () => {
    if (!targetRef || !targetRef.current) return;
    targetRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleGoTop}
      className="
      fixed bottom-4 right-12 z-10
      size-10 aspect-square rounded-full bg-primary/10 opacity-50 
      hover:opacity-100 transition-all 
      active:scale-95 
      flex items-center justify-center " 
    >
      <ArrowUp className="size-8 text-primary/80" />
    </div>
  );
};

export default ScrollTopBtn;
