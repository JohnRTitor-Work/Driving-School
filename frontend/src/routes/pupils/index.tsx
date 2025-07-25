import PupilsPage from "@/pages/Pupils/pupils.page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pupils/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <PupilsPage />
    </>
  );
}
