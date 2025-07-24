import { DataTable } from "@/components/view-pupils/data-table";
import { columns } from "@/components/view-pupils/columns";
import { createFileRoute } from "@tanstack/react-router";
import { useGetPupils } from "@/api/pupil/pupil.query";

export const Route = createFileRoute("/view-pupils-table")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: pupilsList, isLoading, error } = useGetPupils();

  if (isLoading) return <div>Loading pupils...</div>;
  if (error) return <div>Error loading pupils.</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={pupilsList} />
    </div>
  );
}
