import { getPupilById } from "@/api/pupil/pupil.api";
import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { AddPupilForm } from "@/components/Forms/AddPupilForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pupils/$id/edit")({
  loader: async ({ params }) => {
    const apiResponse = await getPupilById(params.id);
    return { details: apiResponse?.data as PupilInfo };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { details } = Route.useLoaderData();

  if (!details) {
    return <div>Pupil not found.</div>;
  }

  return (
    <>
      <h2>Edit Pupil: </h2>
      <AddPupilForm initialData={details} />
    </>
  );
}
