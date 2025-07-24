import { getPupilById } from "@/api/pupil/pupil.api";
import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { EditPupilForm } from "@/components/Forms/pupil-forms";
import { PageHeader } from "@/components/page-header";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/pupils/$id/edit")({
  loader: async ({ params }) => {
    const apiResponse = await getPupilById(params.id);
    return { details: apiResponse?.data as PupilInfo };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { details } = Route.useLoaderData();

  if (!details) {
    return <div>Pupil not found.</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <PageHeader
        title="Edit Pupil"
        description={`Edit details of ${id} here.`}
      />
      <EditPupilForm initialData={details} />
    </div>
  );
}
