import { useMemo } from "react";

import { useParams } from "react-router-dom";

import Cost from "./Cost";
import Customer from "./Customer";
import Inventory from "./Inventory";
import Price from "./Price";
import Supplier from "./Supplier";

type ResultAreaProps = {
  object: string;
  product: string;
};

const ResultArea = ({ object, product }: ResultAreaProps) => {
  const { tab } = useParams();

  const currentContent = useMemo(() => {
    switch (tab) {
      case "price":
        return <Price object={object} product={product} />;
      case "cost":
        return <Cost object={object} product={product} />;
      case "customer":
        return <Customer object={object} />;
      case "supplier":
        return <Supplier object={object} />;
      case "inventory":
        return <Inventory product={product} />;
      default:
        return null;
    }
  }, [tab, object, product]);

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-2 items-center ">
      {currentContent}
    </div>
  );
};

export default ResultArea;
