import { CircleX } from "lucide-react";
import Form from "./Form";

type AddNewSupplierProps = {
  setIsAddNewSupplier: (isAddNewSupplier: boolean) => void;
};

const AddNewSupplier = ({ setIsAddNewSupplier }: AddNewSupplierProps) => {
  return (
    <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center backdrop-blur-xs bg-primary/50">
      <CircleX
        className="absolute top-2 right-2 text-white size-4 cursor-pointer"
        onClick={() => setIsAddNewSupplier(false)}
      />
      <Form />
    </div>
  );
};

export default AddNewSupplier;
