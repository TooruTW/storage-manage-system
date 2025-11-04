import { Button } from "@/components/ui/button";

type TableActionsProps = {
  totalRows: number;
  hasFilter: boolean;
  isEditing: boolean;
  onClearFilter: () => void;
  onEdit: () => void;
  onReset: () => void;
  onUpdate: () => void;
};

export const TableActions = ({
  totalRows,
  hasFilter,
  isEditing,
  onClearFilter,
  onEdit,
  onReset,
  onUpdate,
}: TableActionsProps) => {
  return (
    <div className="flex justify-between items-center mt-4 px-4">
      <div>共 {totalRows} 筆資料</div>
      <div className="flex gap-2">
        {hasFilter && (
          <Button
            className="active:scale-95 transition-all"
            onClick={onClearFilter}
          >
            清除過濾
          </Button>
        )}
        {!isEditing && (
          <Button className="active:scale-95 transition-all" onClick={onEdit}>
            編輯
          </Button>
        )}
        {isEditing && (
          <Button className="active:scale-95 transition-all" onClick={onReset}>
            重置資料
          </Button>
        )}
        {isEditing && (
          <Button className="active:scale-95 transition-all" onClick={onUpdate}>
            確認修改
          </Button>
        )}
      </div>
    </div>
  );
};
