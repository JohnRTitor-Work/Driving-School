import { useGetPupilById } from "@/api/pupil/pupil.query";
import { EditPupilForm } from "@/components/Forms/pupil-forms";
import { PageHeader } from "@/components/page-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pupils/$id/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: pupilData } = useGetPupilById(id);

  if (!pupilData) {
    return <div>Pupil not found.</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <PageHeader
        title="Edit Pupil"
        description={`Edit details of ${id} here.`}
      />
      <EditPupilForm initialData={pupilData} />
    </div>
  );
}
