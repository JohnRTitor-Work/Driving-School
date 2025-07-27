import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getInitials } from "@/lib/pupil-utils";
import { differenceInYears } from "date-fns";
import { PupilViewActions } from "./PupilViewActions";

export function PupilViewDashboard({ pupilData }: { pupilData: PupilInfo }) {
  const pupilName = `${pupilData.title ? `${pupilData.title}. ` : ""}${pupilData.forename} ${pupilData.surname}`;
  const pupilAge = differenceInYears(new Date(), pupilData.dob);
  const hasPassedTheory = pupilData.passedTheory;
  const hasFullAccess = pupilData.fullAccess;
  const hasCaution = pupilData.pupilCaution;

  return (
    <>
      <Card className="rounded p-4 border border-gray-300 my-4">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24 text-2xl">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getInitials(pupilData.forename, pupilData.surname)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">
                  {pupilData.title ? `${pupilData.title}. ` : ""}
                  {pupilData.forename} {pupilData.surname}
                </h2>
                <p className="text-muted-foreground">{pupilData.email}</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge>{pupilData.gender}</Badge>
                <Badge variant="outline">Age: {pupilAge}</Badge>

                {hasPassedTheory && (
                  <Badge variant="default" className="bg-blue-600">
                    Passed Theory
                  </Badge>
                )}
                {hasFullAccess && (
                  <Badge variant="default" className="bg-purple-600">
                    Full Access
                  </Badge>
                )}
                {hasCaution && <Badge variant="destructive">Caution</Badge>}
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="mt-2">
                <PupilViewActions
                  pupilId={pupilData?._id}
                  pupilName={pupilName}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
