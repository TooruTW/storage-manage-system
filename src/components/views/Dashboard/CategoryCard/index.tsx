import { DollarSign } from "lucide-react";
import { useState } from "react";

const FakeCategoryList: AssceptProps[] = [
  { id: "purchaseAmount", lable: "進貨額", value: 100 },
  { id: "salesAmount", lable: "營業額", value: 200 },
];

type AssceptProps = {
  id: "purchaseAmount" | "salesAmount";
  lable: "進貨額" | "營業額";
  value: number;
};

const CategoryCard = () => {
  const [currentCategory, setCurrentCategory] = useState<
    "purchaseAmount" | "salesAmount"
  >("purchaseAmount");

  return (
    <div className="w-full flex gap-7">
      {FakeCategoryList.map((item) => (
        <div
          key={item.id}
          className={`w-full rounded-md p-6 shadow-xs cursor-pointer ${
            currentCategory === item.id
              ? "bg-primary/20"
              : "border-2 border-primary/10"
          }`}
          onClick={() => setCurrentCategory(item.id)}
        >
          <div>
            <p className="text-paragraph-small flex items-center justify-between">
              {item.lable}
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
