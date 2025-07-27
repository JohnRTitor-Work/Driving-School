import { useDeletePupilById } from "@/api/pupil/pupil.mutation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ConfirmationDialog } from "../ui/confirmation-dialog";
import { EditIcon, Trash2Icon } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";

export function PupilViewActions({
  pupilId,
  pupilName,
}: {
  pupilId: string;
  pupilName: string;
}) {
  const { mutateAsync, isPending, isSuccess } = useDeletePupilById();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await mutateAsync(pupilId);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate({ to: "/pupils" });
    }
  }, [isSuccess]);

  return (
    <>
      <div className="flex gap-2 justify-center md:justify-end">
        <Button asChild variant="outline">
          <Link to="/pupils/$id/edit" params={{ id: pupilId }}>
            <EditIcon className="h-4 w-4 mr-2" />
            Edit
          </Link>
        </Button>
        <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>
          <Trash2Icon className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Pupil"
        description={`Are you sure you want to delete the record of ${pupilName}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        isLoading={isPending}
        variant="destructive"
      />
    </>
  );
}
