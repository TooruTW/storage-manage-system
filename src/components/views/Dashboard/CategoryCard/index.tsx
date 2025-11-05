import { useCallback, useMemo } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import { DollarSign } from "lucide-react";

import useGetDashboardData from "../hook/useGetDashboardData";

const CategoryCard = () => {
  const { timeRange, category } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const switchCategory = (category: string) => {
    const currentPath = location.pathname.split("/");
    currentPath[3] = category;
    const newPath = currentPath.join("/");
    navigate(newPath);
  };

  const activeStyle = useCallback(
    (id: string) => {
      const style = "bg-primary/20";
      const inactiveStyle = "border-2 border-primary/10";
      return category === id ? style : inactiveStyle;
    },
    [category]
  );

  const { profitAmount, salesAmount } = useGetDashboardData(
    timeRange as "month" | "quarter" ,
    category as "profitAmount" | "salesAmount"
  );

  const categoryList = useMemo(() => {
    return [
      { id: "profitAmount", label: "損益額", value: profitAmount },
      { id: "salesAmount", label: "營業額", value: salesAmount },
    ];
  }, [profitAmount, salesAmount]);

  return (
    <div className="w-full flex gap-7">
      {categoryList.map((item) => (
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
          <h2 className="text-h2 font-bold">$ {item.value.toLocaleString()}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
