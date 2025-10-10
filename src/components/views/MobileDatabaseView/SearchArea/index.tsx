import { RotateCw, X, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type SearchAreaProps = {
  object: string;
  setObject: (object: string) => void;
  product: string;
  setProduct: (product: string) => void;
};

const SearchArea = ({ object, setObject, product, setProduct }: SearchAreaProps) => {
  const { tab } = useParams();
  const [isProduct, setIsProduct] = useState<boolean>(false);

  useEffect(() => {
    if (tab === "price" || tab === "cost") setIsProduct(true);
    else setIsProduct(false);
  }, [tab]);

  return (
    <div className="flex flex-col gap-2">
      <div className=" flex items-center gap-2 w-full">
        <div
          className={`flex items-center justify-between border-1 rounded-md px-4 py-1 border-primary/10 ${
            isProduct ? "w-1/2" : "w-full"
          }`}
        >
          <input
            type="text"
            name=""
            placeholder="搜尋對象"
            id="object"
            value={object}
            onChange={(e) => setObject(e.target.value)}
            className="w-full outline-none"
          />
          <Search className="size-4" />
        </div>
        {isProduct && (
          <div className="flex items-center justify-between border-1 rounded-md px-4 py-1 border-primary/10 w-1/2">
            <input
              type="text"
              name=""
              placeholder="搜尋商品"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full outline-none"
            />
            <Search className="size-4" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {object && (
            <div className="flex items-center gap-1 text-label rounded-full px-2 py-1 bg-primary/20 w-fit">
              <p>{object}</p>
              <X className="size-3" onClick={() => setObject("")} />
            </div>
          )}
          {product && (
            <div className="flex items-center gap-1 text-label rounded-full px-2 py-1 bg-primary/10 w-fit">
              <p>{product}</p>
              <X className="size-3" onClick={() => setProduct("")} />
            </div>
          )}
        </div>
        <div
          className={`flex items-center gap-1 text-label rounded-full px-2 py-1 bg-primary/10 w-fit ${
            object || product ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setObject("");
            setProduct("");
          }}
        >
          清除條件 <RotateCw className="size-3" />
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
