import { useGetPupilById } from "@/api/pupil/pupil.query";
import { PupilViewDashboard } from "@/components/PupilView/PupilViewDashboard";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { NotFound } from "@/components/ui/not-found";
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

  return <PupilViewDashboard pupilData={pupilData} />;
};

export default PupilPage;
