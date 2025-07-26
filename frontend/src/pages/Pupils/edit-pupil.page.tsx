import { useGetPupilById } from "@/api/pupil/pupil.query";
import { EditPupilForm } from "@/components/Forms/pupil-forms";
import { PageTitleHeader } from "@/components/common/page-title-header";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { NotFound } from "@/components/ui/not-found";
import { useNavigate, useParams } from "@tanstack/react-router";

const EditPupilPage = () => {
  const { id } = useParams({
    from: "/pupils/$id/edit",
  });
  const { data: pupilData, isLoading } = useGetPupilById(id);
  const navigate = useNavigate();

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

  return (
    <div className="container mx-auto py-10">
      <PageTitleHeader
        title="Edit Pupil"
        description={`Edit details of ${id} here.`}
      />
      <EditPupilForm
        initialData={pupilData}
        onSuccessAction={() => {
          navigate({ to: "/pupils/$id", params: { id } });
        }}
      />
    </div>
  );
};

export default EditPupilPage;
