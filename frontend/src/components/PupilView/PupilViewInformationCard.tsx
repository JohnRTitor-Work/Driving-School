import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { Card, CardContent } from "@/components/ui/card";

export function PupilViewInformationCard({
  pupilData,
}: {
  pupilData: PupilInfo;
}) {
  return (
    <>
      <Card className="rounded p-4 border border-gray-300 my-4">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Details</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Date of Birth
                  </p>
                  <p className="text-base">{pupilData.dob}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Allow Text Messaging
                  </p>
                  <p className="text-base">
                    {pupilData.allowTextMessaging ? "Yes" : "No"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Pupil Type
                  </p>
                  <p className="text-base">{pupilData.pupilType}</p>
                </div>
              </div>
            </div>

            {pupilData.home && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Mobile
                    </p>
                    <p className="text-base">
                      {pupilData.home.mobile || "N/A"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      Work
                    </p>
                    <p className="text-base">{pupilData.home.work || "N/A"}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Address Information</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Pickup Address
                  </p>
                  {pupilData.pickupAddress ? (
                    <div className="p-3 bg-muted rounded-md space-y-1">
                      <p className="text-sm">
                        {pupilData.pickupAddress.houseNo}{" "}
                        {pupilData.pickupAddress.address}
                      </p>
                      <p className="text-sm font-medium">
                        {pupilData.pickupAddress.postcode}
                      </p>
                    </div>
                  ) : (
                    <p className="text-base">N/A</p>
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Home Address
                  </p>
                  {pupilData.homeAddress ? (
                    <div className="p-3 bg-muted rounded-md space-y-1">
                      <p className="text-sm">
                        {pupilData.homeAddress.houseNo}{" "}
                        {pupilData.homeAddress.address}
                      </p>
                      <p className="text-sm font-medium">
                        {pupilData.homeAddress.postcode}
                      </p>
                    </div>
                  ) : (
                    <p className="text-base">N/A</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Management Information</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Pupil Owner
                  </p>
                  <p className="text-base">{pupilData.pupilOwner || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Allocated To
                  </p>
                  <p className="text-base">{pupilData.allocatedTo || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Default Product
                  </p>
                  <p className="text-base">
                    {pupilData.defaultProduct || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">License Information</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    License Type
                  </p>
                  <p className="text-base">{pupilData.licenseType || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    License No
                  </p>
                  <p className="text-base">{pupilData.licenseNo || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Cert No
                  </p>
                  <p className="text-base">{pupilData.certNo || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Date Passed
                  </p>
                  <p className="text-base">{pupilData.datePassed || "N/A"}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Usual Availability
                  </p>
                  <p className="text-base">
                    {pupilData.usualAvailability || "N/A"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Discount
                  </p>
                  <p className="text-base">{pupilData.discount || "N/A"}</p>
                </div>
              </div>
            </div>

            {pupilData.notes && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">
                  Notes
                </p>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-base whitespace-pre-wrap">
                    {pupilData.notes}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
