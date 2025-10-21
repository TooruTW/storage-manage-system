import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DollarSign } from "lucide-react";
import { CategoryProps } from "./type";
import { useCallback } from "react";

const FakeCategoryList: CategoryProps[] = [
  { id: "purchaseAmount", label: "進貨額", value: 100 },
  { id: "salesAmount", label: "營業額", value: 200 },
];

const CategoryCard = () => {
  const { category } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const switchCategory = (category: CategoryProps["id"]) => {
    const currentPath = location.pathname.split("/");
    currentPath[3] = category;
    const newPath = currentPath.join("/");
    navigate(newPath);
  };

  const activeStyle = useCallback(
    (id: CategoryProps["id"]) => {
      const style = "bg-primary/20";
      const inactiveStyle = "border-2 border-primary/10";
      return category === id ? style : inactiveStyle;
    },
    [category]
  );

  return (
    <div className="w-full flex gap-7">
      {FakeCategoryList.map((item) => (
        <div
          key={item.id}
          className={`w-full rounded-md p-6 shadow-xs cursor-pointer 
            ${activeStyle(item.id)}`}
          onClick={() => switchCategory(item.id)}
        >
          <div>
            <p className="text-paragraph-small flex items-center justify-between">
              {item.label}
              <DollarSign size={16} className="text-muted-foreground" />
            </p>
          </div>
          <h2 className="text-h2 font-bold">$ {item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
