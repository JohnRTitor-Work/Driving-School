import type { AddPupilPayload } from "@/api/pupil/pupil.api.schema";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<AddPupilPayload>[] = [
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
];
