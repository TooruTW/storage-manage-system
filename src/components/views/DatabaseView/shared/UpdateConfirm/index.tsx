import { Button } from "@/components/ui/button";
import { usePopupStore } from "@/stores/usePopupStore";
type UpdateConfirmProps = {
  warningContent: string;
  onConfirm: () => void;
};

const UpdateConfirm = ({ warningContent, onConfirm }: UpdateConfirmProps) => {
  const { reset } = usePopupStore();

  const handleConfirm = () => {
    onConfirm();
    reset();
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <div className="flex flex-col gap-4 py-4 px-6 rounded-lg bg-background border border-border">
      <h2 className="text-lg font-bold">{warningContent}</h2>
      <div className="flex justify-end gap-2">
        <Button onClick={handleConfirm}>確認</Button>
        <Button onClick={handleCancel} variant="outline">取消</Button>
      </div>
    </div>
  );
};

export default UpdateConfirm;
