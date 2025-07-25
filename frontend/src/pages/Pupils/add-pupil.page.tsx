import { AddPupilForm } from "@/components/Forms/pupil-forms";
import { PageTitleHeader } from "@/components/common/page-title-header";

const AddPupilPage = () => {
  return (
    <div className="container mx-auto py-10">
      <PageTitleHeader title="Add Pupil" />
      <AddPupilForm />
    </div>
  );
};

export default AddPupilPage;
