import { useGetPupils } from "@/api/pupil/pupil.query";
import { pupilsTableColumns } from "@/components/Table/Pupils/PupilsTableColumns";
import { PupilsTableCore } from "@/components/Table/Pupils/PupilsTableCore";
import { PageTitleHeader } from "@/components/common/page-title-header";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { NotFound } from "@/components/ui/not-found";

const PupilsPage = () => {
  const { data: pupilsList, isLoading, error } = useGetPupils();

  if (isLoading) {
    return <LoadingSpinner message="Loading Pupil Data..." />;
  }

  if (!pupilsList || error) {
    return (
      <NotFound
        title="Error loading Pupils list"
        message="Please make sure database is connected or it has enough entries."
      />
    );
  }

  return (
    <div className="container mx-auto py-10">
      <PageTitleHeader title="Pupils List" />
      {pupilsList && pupilsList.length > 0 ? (
        <PupilsTableCore columns={pupilsTableColumns} data={pupilsList} />
      ) : (
        <>No pupils found.</>
      )}
    </div>
  );
};

export default PupilsPage;
