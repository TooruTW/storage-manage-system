import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ChevronRight } from "lucide-react";

import { MENU_CONSTANTS } from "./constants";

type MenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Menu = ({ isOpen, setIsOpen }: MenuProps) => {
  const { tab } = useParams();
  const menuConstants = MENU_CONSTANTS;
  const navigate = useNavigate();
  const menuColors = [
    "bg-primary/90",
    "bg-primary/80",
    "bg-primary/70",
    "bg-primary/60",
  ];
  const openStyle = useMemo(() => {
    return isOpen ? "rotate-90" : "rotate-0";
  }, [isOpen]);
  return (
    <ul className="flex flex-col gap-2">
      <li
        className="flex items-center justify-between bg-primary rounded-md p-2 text-primary-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ChevronRight className={`size-10 ${openStyle}`} />
        <h2 className="text-h2 font-normal">
          {menuConstants.find((item) => item.id === tab)?.label}
        </h2>
      </li>
      {isOpen &&
        menuConstants.map((item, index) => {
          if (item.id === tab) return null;
          return (
            <li
              key={item.id}
              className={`flex items-center justify-end gap-2 rounded-md p-2 text-primary-foreground ${menuColors[index]}`}
              onClick={() => navigate(`/mobile-database/${item.id}`)}
            >
              <h2 className="text-h2 font-normal">{item.label}</h2>
            </li>
          );
        })}
    </ul>
  );
};

export default Menu;
