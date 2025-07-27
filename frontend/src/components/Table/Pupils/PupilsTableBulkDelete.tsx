import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { useDeletePupilsByIds } from "@/api/pupil/pupil.mutation";
import { Trash2Icon } from "lucide-react";
import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import type { Row } from "@tanstack/react-table";

type PupilsTableBulkDeleteActionProps<TData> = {
  selectedRows: Row<TData>[];
  onDeleteComplete: () => void;
};

export function PupilsTableBulkDeleteAction<TData>({
  selectedRows,
  onDeleteComplete,
}: PupilsTableBulkDeleteActionProps<TData>) {
  const [showBulkDeleteDialog, setShowBulkDeleteDialog] = useState(false);
  const { mutateAsync, isPending } = useDeletePupilsByIds();

  const selectedCount = selectedRows.length;

  if (selectedCount === 0) {
    return null;
  }

  const handleBulkDelete = async () => {
    const selectedIds = selectedRows.map(
      (row) => (row.original as PupilInfo)._id,
    );
    await mutateAsync(selectedIds);
    onDeleteComplete();
    setShowBulkDeleteDialog(false);
  };

  const getSelectedPupilNames = () => {
    return selectedRows
      .map((row) => {
        const pupil = row.original as PupilInfo;
        return `${pupil.title ? `${pupil.title}. ` : ""}${pupil.forename} ${pupil.surname}`;
      })
      .join(", ");
  };

  const getConfirmationDescription = () => {
    if (selectedCount <= 3) {
      return `Are you sure you want to delete the records of ${getSelectedPupilNames()}? This action cannot be undone.`;
    }
    return `Are you sure you want to delete ${selectedCount} pupil records? This action cannot be undone.`;
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setShowBulkDeleteDialog(true)}
          disabled={isPending}
        >
          <Trash2Icon className="h-4 w-4 mr-2" />
          Delete Selected
        </Button>
      </div>

      <ConfirmationDialog
        open={showBulkDeleteDialog}
        onOpenChange={setShowBulkDeleteDialog}
        title={`Delete ${selectedCount} Pupil${selectedCount !== 1 ? "s" : ""}`}
        description={getConfirmationDescription()}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleBulkDelete}
        isLoading={isPending}
        variant="destructive"
      />
    </>
  );
}
