import { AddPupilForm } from "@/components/Forms/pupil-forms";
import { PageHeader } from "@/components/page-header";

const AddPupilPage = () => {
  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Add Pupil" />
      <AddPupilForm />
    </div>
  );
};

export default AddPupilPage;
