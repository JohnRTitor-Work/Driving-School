import { useGetPupilById } from "@/api/pupil/pupil.query";
import { EditPupilForm } from "@/components/Forms/pupil-forms";
import { PageHeader } from "@/components/page-header";
import { useParams } from "@tanstack/react-router";

const EditPupilPage = () => {
  const { id } = useParams({
    from: "/pupils/$id/edit",
  });
  const { data: pupilData } = useGetPupilById(id);

  if (!pupilData) {
    return <div>Pupil not found.</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <PageHeader
        title="Edit Pupil"
        description={`Edit details of ${id} here.`}
      />
      <EditPupilForm initialData={pupilData} />
    </div>
  );
};

export default EditPupilPage;
