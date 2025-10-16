import Menu from "./Menu";
import SearchArea from "./SearchArea";
import ResultArea from "./ResultArea";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MobileDatabaseView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [object, setObject] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const { tab } = useParams();
  useEffect(()=>{
    setIsOpen(false);
  },[tab])
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col gap-4 relative">
      {isOpen && (
        <div
          className=" fixed top-0 left-0 w-full h-full backdrop-blur-sm z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className="w-full h-fit relative z-10">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <SearchArea object={object} setObject={setObject} product={product} setProduct={setProduct} />
      <ResultArea object={object} product={product} />
      <ArrowLeft className="size-10 absolute left-0 bottom-4 rounded-full bg-primary/10 p-2 shadow-md" onClick={() => navigate("/home")}/>
    </div>
  );
};

export default MobileDatabaseView;
