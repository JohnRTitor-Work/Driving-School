import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGetPupilById } from "@/api/pupil/pupil.query";

export const Route = createFileRoute("/pupils/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: pupilData } = useGetPupilById(id);

  if (!pupilData) {
    return <div>Pupil not found.</div>;
  }

  return (
    <Card className="rounded p-4 border border-gray-300 my-4">
      <CardHeader>
        <CardTitle>Pupil Details</CardTitle>
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
  );
}
