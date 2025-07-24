import { AddPupilForm } from "@/components/Forms/AddPupilForm";
import { PageHeader } from "@/components/page-header";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/add-pupil")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Add Pupil" />
      <AddPupilForm />
    </div>
  );
}
