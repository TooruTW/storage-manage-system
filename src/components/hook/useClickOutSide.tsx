import { useEffect, useRef, useCallback } from "react";

type UseClickOutSideProps = {
  action: () => void;
};

const useClickOutSide = ({ action }: UseClickOutSideProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current?.contains(event.target as Node)) return;
    action();
  }, [action]);

  useEffect(() => {
    if (!ref.current) return;

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return ref;
};

export default useClickOutSide;
