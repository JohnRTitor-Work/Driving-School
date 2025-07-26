import EditPupilPage from "@/pages/Pupils/edit-pupil.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pupils/$id/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <EditPupilPage />
    </>
  );
}
