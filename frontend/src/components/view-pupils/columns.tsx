import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { useDeletePupilById } from "@/api/pupil/pupil.mutation";
import { Link } from "@tanstack/react-router";

export const columns: ColumnDef<PupilInfo>[] = [
  {
    header: "Name",
    accessorFn: (row) =>
      `${row.title ? `${row.title}. ` : ""}${row.forename} ${row.surname}`,
    id: "name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "dob",
    header: "Date of Birth",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "pupilType",
    header: "Pupil Type",
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
    header: "Passed Theory",
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
      const { mutateAsync, isPending } = useDeletePupilById();
      const pupil = row.original;

      const handleDelete = async () => {
        await mutateAsync(pupil._id);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link
                to="/pupils/$id"
                params={{
                  id: pupil._id,
                }}
              >
                View
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} disabled={isPending}>
              {isPending ? "Deleting..." : "Delete Pupil"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
