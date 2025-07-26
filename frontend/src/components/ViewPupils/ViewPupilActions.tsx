import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { useDeletePupilById } from "@/api/pupil/pupil.mutation";
import { Link } from "@tanstack/react-router";
import { MoreHorizontalIcon } from "lucide-react";
import type { PupilInfo } from "@/api/pupil/pupil.api.schema";

interface PupilActionsProps {
  pupil: PupilInfo;
}

export const PupilActions = ({ pupil }: PupilActionsProps) => {
  const { mutateAsync: deletePupil, isPending: isDeleting } =
    useDeletePupilById();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = async () => {
    await deletePupil(pupil._id);
  };

  const pupilName = `${pupil.title ? `${pupil.title}. ` : ""}${pupil.forename} ${pupil.surname}`;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem asChild>
            <Link to="/pupils/$id" params={{ id: pupil._id }}>
              View
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/pupils/$id/edit" params={{ id: pupil._id }}>
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setShowDeleteDialog(true)}
            className="text-red-600 focus:text-red-600"
          >
            Delete Pupil
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Pupil"
        description={`Are you sure you want to delete ${pupilName}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        isLoading={isDeleting}
        variant="destructive"
      />
    </>
  );
};
