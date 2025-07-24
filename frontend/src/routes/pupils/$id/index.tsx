import { getPupilById } from "@/api/pupil/pupil.api";
import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/pupils/$id/")({
  loader: async ({ params }) => {
    const apiResponse = await getPupilById(params.id);
    return { details: apiResponse?.data as PupilInfo };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { details } = Route.useLoaderData();

  if (!details) {
    return <div>Pupil not found.</div>;
  }

  return (
    <Card className="rounded p-4 border border-gray-300 my-4">
      <CardHeader>
        <CardTitle>Pupil Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <strong>Pupil Id:</strong> {details._id}
        </div>
        <div>
          <strong>Name:</strong> {details.title}. {details.forename}{" "}
          {details.surname}
        </div>
        <div>
          <strong>Email:</strong> {details.email}
        </div>
        <div>
          <strong>Date of Birth:</strong> {details.dob}
        </div>
        <div>
          <strong>Gender:</strong> {details.gender}
        </div>
        <div>
          <strong>Home:</strong>
          <div className="ml-4">
            <div>
              <strong>Mobile:</strong> {details.home?.mobile}
            </div>
            <div>
              <strong>Work:</strong> {details.home?.work}
            </div>
          </div>
        </div>
        <div>
          <strong>Allow Text Messaging:</strong>{" "}
          {details.allowTextMessaging ? "Yes" : "No"}
        </div>
        <div>
          <strong>Pickup Address:</strong>
          <div className="ml-4">
            <div>
              <strong>Postcode:</strong> {details.pickupAddress?.postcode}
            </div>
            <div>
              <strong>House No:</strong> {details.pickupAddress?.houseNo}
            </div>
            <div>
              <strong>Address:</strong> {details.pickupAddress?.address}
            </div>
          </div>
        </div>
        <div>
          <strong>Home Address:</strong>
          <div className="ml-4">
            <div>
              <strong>Postcode:</strong> {details.homeAddress?.postcode}
            </div>
            <div>
              <strong>House No:</strong> {details.homeAddress?.houseNo}
            </div>
            <div>
              <strong>Address:</strong> {details.homeAddress?.address}
            </div>
          </div>
        </div>
        <div>
          <strong>Pupil Type:</strong> {details.pupilType}
        </div>
        <div>
          <strong>Pupil Owner:</strong> {details.pupilOwner}
        </div>
        <div>
          <strong>Allocated To:</strong> {details.allocatedTo}
        </div>
        <div>
          <strong>License Type:</strong> {details.licenseType}
        </div>
        <div>
          <strong>License No:</strong> {details.licenseNo}
        </div>
        <div>
          <strong>Passed Theory:</strong> {details.passedTheory ? "Yes" : "No"}
        </div>
        <div>
          <strong>FOTT:</strong> {details.fott ? "Yes" : "No"}
        </div>
        <div>
          <strong>Full Access:</strong> {details.fullAccess ? "Yes" : "No"}
        </div>
        <div>
          <strong>Pupil Caution:</strong> {details.pupilCaution ? "Yes" : "No"}
        </div>
        <div>
          <strong>Cert No:</strong> {details.certNo}
        </div>
        <div>
          <strong>Date Passed:</strong> {details.datePassed ?? "N/A"}
        </div>
        <div>
          <strong>Usual Availability:</strong> {details.usualAvailability}
        </div>
        <div>
          <strong>Discount:</strong> {details.discount}
        </div>
        <div>
          <strong>Default Product:</strong> {details.defaultProduct}
        </div>
        <div>
          <strong>Online Password:</strong> {details.onlinePassword}
        </div>
        <div>
          <strong>Notes:</strong> {details.notes}
        </div>
      </CardContent>
    </Card>
  );
}
