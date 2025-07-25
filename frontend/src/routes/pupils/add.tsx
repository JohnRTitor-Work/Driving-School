import AddPupilPage from "@/pages/Pupils/add-pupil.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pupils/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AddPupilPage />
    </>
  );
}
