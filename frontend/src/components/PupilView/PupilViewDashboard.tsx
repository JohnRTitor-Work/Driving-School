import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { PupilViewOverviewCard } from "./PupilViewOverviewCard";
import { PupilViewInformationCard } from "./PupilViewInformationCard";

export function PupilViewDashboard({ pupilData }: { pupilData: PupilInfo }) {
  return (
    <>
      <PupilViewOverviewCard pupilData={pupilData} />

      <PupilViewInformationCard pupilData={pupilData} />
    </>
  );
}
