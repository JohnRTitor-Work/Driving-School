import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDownIcon } from "lucide-react";
import { format } from "date-fns";
import { PupilActions } from "@/components/ViewPupils/ViewPupilActions";

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
