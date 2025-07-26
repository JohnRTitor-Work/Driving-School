import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";
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

export const columns: ColumnDef<PupilInfo>[] = [
  {
    id: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorFn: (row) =>
      `${row.title ? `${row.title}. ` : ""}${row.forename} ${row.surname}`,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
    accessorFn: (row) => `${format(row.dob, "yyyy-MM-dd")}`,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Gender
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "pupilType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pupil Type
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "allocatedTo",
    header: "Allocated To",
  },
  {
    accessorKey: "licenseType",
    header: "License Type",
  },
  {
    accessorKey: "passedTheory",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Passed Theory
          <ArrowUpDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ getValue }) => (getValue() ? "Yes" : "No"),
  },
  {
    accessorKey: "datePassed",
    header: "Date Passed",
    cell: ({ getValue }) => getValue() ?? "N/A",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const pupil = row.original;

      return <PupilActions pupil={pupil} />;
    },
  },
];

export function PupilActions({ pupil }: { pupil: PupilInfo }) {
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
        description={`Are you sure you want to delete the record of ${pupilName}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        isLoading={isDeleting}
        variant="destructive"
      />
    </>
  );
}
