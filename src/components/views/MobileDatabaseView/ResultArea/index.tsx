import { useMemo } from "react";
import { useParams } from "react-router-dom";

// import { Box } from "lucide-react";

import Price from "./Price";
import Cost from "./Cost";
import Customer from "./Customer";
import Supplier from "./Supplier";

type ResultAreaProps = {
  object: string;
  product: string;
};

const ResultArea = ({ object, product }: ResultAreaProps) => {
  const { tab } = useParams();

  const currentContent = useMemo(()=>{
    switch(tab){
      case "price":
        return <Price object={object} product={product} />;
      case "cost":
        return <Cost object={object} product={product} />;
      case "customer":
        return <Customer object={object} />;
      case "supplier":
        return <Supplier object={object} />;
      default:
        return null;
    }
  },[tab, object, product])

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-2 items-center justify-center">
      {currentContent}
    </div>
  );
};

export default ResultArea;
