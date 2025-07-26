import { AddPupilForm } from "@/components/Forms/pupil-forms";
import { PageTitleHeader } from "@/components/common/page-title-header";
import { useNavigate } from "@tanstack/react-router";

const AddPupilPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto px-6">
        <PageTitleHeader title="Add Pupil" />
      </div>
      <AddPupilForm
        onSuccessAction={() => {
          navigate({ to: "/pupils" });
        }}
      />
    </div>
  );
};

export default AddPupilPage;
