import { Box } from "lucide-react";
import { useParams } from "react-router-dom";
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

  if (object === "" && product === "")
    return (
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
        <Box className="size-30" strokeWidth={0.5} />
        <h2 className="text-h2 font-normal">請輸入篩選條件</h2>
      </div>
    );

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-2 items-center justify-center">
      {tab === "price" && <Price object={object} product={product} />}
      {tab === "cost" && <Cost object={object} product={product} />}
      {tab === "customer" && <Customer />}
      {tab === "supplier" && <Supplier />}
    </div>
  );
};

export default ResultArea;
