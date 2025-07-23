import { createFileRoute } from "@tanstack/react-router";
import { useGetPupils } from "@/api/pupil/pupil.query";

export const Route = createFileRoute("/view-pupil")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, error } = useGetPupils();

  if (isLoading) return <div>Loading pupils...</div>;
  if (error) return <div>Error loading pupils.</div>;

  console.log(data);

  return <></>;
}
