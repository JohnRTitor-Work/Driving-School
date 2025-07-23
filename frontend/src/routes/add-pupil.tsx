import { AddPupilForm } from "@/components/Forms/AddPupilForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/add-pupil")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Add Pupils</h1>
      <AddPupilForm />
    </>
  );
}
