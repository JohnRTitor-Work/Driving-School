import { createFileRoute } from "@tanstack/react-router";
import { useGetPupils } from "@/api/pupil/pupil.query";

export const Route = createFileRoute("/view-pupils")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: pupilsList, isLoading, error } = useGetPupils();

  if (isLoading) return <div>Loading pupils...</div>;
  if (error) return <div>Error loading pupils.</div>;

  return (
    <div>
      {pupilsList && pupilsList.length > 0 ? (
        pupilsList.map((pupil, index) => (
          <div key={index} className="border border-gray-300 my-4 p-4">
            <div>
              <strong>Pupil NO:</strong> {index}
            </div>
            <div>
              <strong>Name:</strong> {pupil.title}. {pupil.forename}{" "}
              {pupil.surname}
            </div>
            <div>
              <strong>Email:</strong> {pupil.email}
            </div>
            <div>
              <strong>Date of Birth:</strong> {pupil.dob}
            </div>
            <div>
              <strong>Gender:</strong> {pupil.gender}
            </div>
            <div>
              <strong>Home:</strong>
              <div className="ml-4">
                <div>
                  <strong>Mobile:</strong> {pupil.home?.mobile}
                </div>
                <div>
                  <strong>Work:</strong> {pupil.home?.work}
                </div>
              </div>
            </div>
            <div>
              <strong>Allow Text Messaging:</strong>{" "}
              {pupil.allowTextMessaging ? "Yes" : "No"}
            </div>
            <div>
              <strong>Pickup Address:</strong>
              <div className="ml-4">
                <div>
                  <strong>Postcode:</strong> {pupil.pickupAddress?.postcode}
                </div>
                <div>
                  <strong>House No:</strong> {pupil.pickupAddress?.houseNo}
                </div>
                <div>
                  <strong>Address:</strong> {pupil.pickupAddress?.address}
                </div>
              </div>
            </div>
            <div>
              <strong>Home Address:</strong>
              <div className="ml-4">
                <div>
                  <strong>Postcode:</strong> {pupil.homeAddress?.postcode}
                </div>
                <div>
                  <strong>House No:</strong> {pupil.homeAddress?.houseNo}
                </div>
                <div>
                  <strong>Address:</strong> {pupil.homeAddress?.address}
                </div>
              </div>
            </div>
            <div>
              <strong>Pupil Type:</strong> {pupil.pupilType}
            </div>
            <div>
              <strong>Pupil Owner:</strong> {pupil.pupilOwner}
            </div>
            <div>
              <strong>Allocated To:</strong> {pupil.allocatedTo}
            </div>
            <div>
              <strong>License Type:</strong> {pupil.licenseType}
            </div>
            <div>
              <strong>License No:</strong> {pupil.licenseNo}
            </div>
            <div>
              <strong>Passed Theory:</strong>{" "}
              {pupil.passedTheory ? "Yes" : "No"}
            </div>
            <div>
              <strong>FOTT:</strong> {pupil.fott ? "Yes" : "No"}
            </div>
            <div>
              <strong>Full Access:</strong> {pupil.fullAccess ? "Yes" : "No"}
            </div>
            <div>
              <strong>Pupil Caution:</strong>{" "}
              {pupil.pupilCaution ? "Yes" : "No"}
            </div>
            <div>
              <strong>Cert No:</strong> {pupil.certNo}
            </div>
            <div>
              <strong>Date Passed:</strong> {pupil.datePassed ?? "N/A"}
            </div>
            <div>
              <strong>Usual Availability:</strong> {pupil.usualAvailability}
            </div>
            <div>
              <strong>Discount:</strong> {pupil.discount}
            </div>
            <div>
              <strong>Default Product:</strong> {pupil.defaultProduct}
            </div>
            <div>
              <strong>Online Password:</strong> {pupil.onlinePassword}
            </div>
            <div>
              <strong>Notes:</strong> {pupil.notes}
            </div>
          </div>
        ))
      ) : (
        <div>No pupils found.</div>
      )}
    </div>
  );
}
