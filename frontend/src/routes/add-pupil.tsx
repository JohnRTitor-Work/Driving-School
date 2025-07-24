import { AddPupilForm } from "@/components/Forms/AddPupilForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/add-pupil")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto py-10">
      <h1>Add Pupils</h1>
      <AddPupilForm />
    </div>
  );
}
