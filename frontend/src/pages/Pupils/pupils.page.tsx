import { useGetPupils } from "@/api/pupil/pupil.query";
import { columns } from "@/components/ViewPupils/ViewPupilTable";
import { DataTable } from "@/components/ui/data-table";

const PupilsPage = () => {
  const { data: pupilsList, isLoading, error } = useGetPupils();

  if (isLoading) return <div>Loading pupils...</div>;
  if (error) return <div>Error loading pupils.</div>;

  return (
    <div className="container mx-auto py-10">
      {pupilsList && pupilsList.length > 0 ? (
        <DataTable columns={columns} data={pupilsList} />
      ) : (
        <>No pupils found.</>
      )}
    </div>
  );
};

export default PupilsPage;
