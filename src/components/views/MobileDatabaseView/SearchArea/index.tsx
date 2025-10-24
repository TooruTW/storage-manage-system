import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { RotateCw, X, Search } from "lucide-react";

type SearchAreaProps = {
  object: string;
  setObject: (object: string) => void;
  product: string;
  setProduct: (product: string) => void;
};

const SearchArea = ({
  object,
  setObject,
  product,
  setProduct,
}: SearchAreaProps) => {
  const { tab } = useParams();
  const hasObject = useMemo(
    () =>
      tab === "price" ||
      tab === "cost" ||
      tab === "customer" ||
      tab === "supplier",
    [tab]
  );
  const hasProduct = useMemo(
    () => tab === "price" || tab === "cost" || tab === "inventory",
    [tab]
  );
  const isFilterActive = useMemo(
    () => !!(object || product),
    [object, product]
  );

  const [inputStyle, setInputStyle] = useState<string>("w-full");
  const [cleanerStyle, setCleanerStyle] = useState<string>("opacity-0");

  useEffect(() => {
    const inputWidth = (hasObject && hasProduct) ? "w-1/2" : "w-full";
    setInputStyle(inputWidth);
  }, [hasProduct, hasObject]);

  useEffect(() => {
    setCleanerStyle(isFilterActive ? "opacity-100" : "opacity-20");
  }, [isFilterActive]);

  function handleCleanAllFilters() {
    setObject("");
    setProduct("");
  }

  function handleCleanObject() {
    setObject("");
  }

  function handleCleanProduct() {
    setProduct("");
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 w-full">
        {hasObject && (
          <div
            className={`flex items-center justify-between border-1 rounded-md px-4 py-1 border-primary/10 ${inputStyle}`}
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
        )}
        {hasProduct && (
          <div className={`flex items-center justify-between border-1 rounded-md px-4 py-1 border-primary/10 ${inputStyle}`}>
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
              <X className="size-3" onClick={handleCleanObject} />
            </div>
          )}
          {product && (
            <div className="flex items-center gap-1 text-label rounded-full px-2 py-1 bg-primary/10 w-fit">
              <p>{product}</p>
              <X className="size-3" onClick={handleCleanProduct} />
            </div>
          )}
        </div>
        <div
          className={`flex items-center gap-1 text-label rounded-full px-2 py-1 bg-primary/10 w-fit ${cleanerStyle}`}
          onClick={handleCleanAllFilters}
        >
          清除條件 <RotateCw className="size-3" />
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
