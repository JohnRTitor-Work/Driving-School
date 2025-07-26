import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { useDeletePupilById } from "@/api/pupil/pupil.mutation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ConfirmationDialog } from "../ui/confirmation-dialog";
import { EditIcon, Trash2Icon } from "lucide-react";

export function ViewPupilDashboard({ pupilData }: { pupilData: PupilInfo }) {
  const pupilName = `${pupilData.title ? `${pupilData.title}. ` : ""}${pupilData.forename} ${pupilData.surname}`;

  return (
    <>
      <Card className="rounded p-4 border border-gray-300 my-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>Pupil Details</CardTitle>
          <ViewPupilActions pupilId={pupilData?._id} pupilName={pupilName} />
        </CardHeader>
        <CardContent>
          <div>
            <strong>Pupil Id:</strong> {pupilData._id}
          </div>
          <div>
            <strong>Name:</strong> {pupilData.title}. {pupilData.forename}{" "}
            {pupilData.surname}
          </div>
          <div>
            <strong>Email:</strong> {pupilData.email}
          </div>
          <div>
            <strong>Date of Birth:</strong> {pupilData.dob}
          </div>
          <div>
            <strong>Gender:</strong> {pupilData.gender}
          </div>
          <div>
            <strong>Home:</strong>
            <div className="ml-4">
              <div>
                <strong>Mobile:</strong> {pupilData.home?.mobile}
              </div>
              <div>
                <strong>Work:</strong> {pupilData.home?.work}
              </div>
            </div>
          </div>
          <div>
            <strong>Allow Text Messaging:</strong>{" "}
            {pupilData.allowTextMessaging ? "Yes" : "No"}
          </div>
          <div>
            <strong>Pickup Address:</strong>
            <div className="ml-4">
              <div>
                <strong>Postcode:</strong> {pupilData.pickupAddress?.postcode}
              </div>
              <div>
                <strong>House No:</strong> {pupilData.pickupAddress?.houseNo}
              </div>
              <div>
                <strong>Address:</strong> {pupilData.pickupAddress?.address}
              </div>
            </div>
          </div>
          <div>
            <strong>Home Address:</strong>
            <div className="ml-4">
              <div>
                <strong>Postcode:</strong> {pupilData.homeAddress?.postcode}
              </div>
              <div>
                <strong>House No:</strong> {pupilData.homeAddress?.houseNo}
              </div>
              <div>
                <strong>Address:</strong> {pupilData.homeAddress?.address}
              </div>
            </div>
          </div>
          <div>
            <strong>Pupil Type:</strong> {pupilData.pupilType}
          </div>
          <div>
            <strong>Pupil Owner:</strong> {pupilData.pupilOwner}
          </div>
          <div>
            <strong>Allocated To:</strong> {pupilData.allocatedTo}
          </div>
          <div>
            <strong>License Type:</strong> {pupilData.licenseType}
          </div>
          <div>
            <strong>License No:</strong> {pupilData.licenseNo}
          </div>
          <div>
            <strong>Passed Theory:</strong>{" "}
            {pupilData.passedTheory ? "Yes" : "No"}
          </div>
          <div>
            <strong>FOTT:</strong> {pupilData.fott ? "Yes" : "No"}
          </div>
          <div>
            <strong>Full Access:</strong> {pupilData.fullAccess ? "Yes" : "No"}
          </div>
          <div>
            <strong>Pupil Caution:</strong>{" "}
            {pupilData.pupilCaution ? "Yes" : "No"}
          </div>
          <div>
            <strong>Cert No:</strong> {pupilData.certNo}
          </div>
          <div>
            <strong>Date Passed:</strong> {pupilData.datePassed ?? "N/A"}
          </div>
          <div>
            <strong>Usual Availability:</strong> {pupilData.usualAvailability}
          </div>
          <div>
            <strong>Discount:</strong> {pupilData.discount}
          </div>
          <div>
            <strong>Default Product:</strong> {pupilData.defaultProduct}
          </div>
          <div>
            <strong>Online Password:</strong> {pupilData.onlinePassword}
          </div>
          <div>
            <strong>Notes:</strong> {pupilData.notes}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

function ViewPupilActions({
  pupilId,
  pupilName,
}: {
  pupilId: string;
  pupilName: string;
}) {
  const { mutateAsync, isPending, isSuccess } = useDeletePupilById();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await mutateAsync(pupilId);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate({ to: "/pupils" });
    }
  }, [isSuccess]);

  return (
    <>
      <div className="flex gap-2">
        <Button asChild variant="outline">
          <Link to="/pupils/$id/edit" params={{ id: pupilId }}>
            <EditIcon className="h-4 w-4 mr-2" />
            Edit
          </Link>
        </Button>
        <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>
          <Trash2Icon className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>

      <ConfirmationDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        title="Delete Pupil"
        description={`Are you sure you want to delete the record of ${pupilName}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDelete}
        isLoading={isPending}
        variant="destructive"
      />
    </>
  );
}
