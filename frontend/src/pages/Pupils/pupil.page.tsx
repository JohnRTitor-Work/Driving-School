import { useGetPupilById } from "@/api/pupil/pupil.query";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { NotFound } from "@/components/ui/not-found";
import { ViewPupilDashboard } from "@/components/ViewPupils/ViewPupilDashboard";
import { useParams } from "@tanstack/react-router";

const PupilPage = () => {
  const { id } = useParams({
    from: "/pupils/$id/",
  });
  const { data: pupilData, isLoading } = useGetPupilById(id);

  if (isLoading) {
    return <LoadingSpinner message="Loading Pupil Data..." />;
  }

  if (!pupilData) {
    return (
      <NotFound
        title="Pupil not found"
        message="Please check whether the id is valid."
      />
    );
  }

  return <ViewPupilDashboard pupilData={pupilData} />;
};

export default PupilPage;
