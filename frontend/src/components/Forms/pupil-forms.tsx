import type { PupilInfo } from "@/api/pupil/pupil.api.schema";
import { BasePupilForm } from "./BasePupilForm";

export function AddPupilForm({
  onSuccessAction,
}: {
  onSuccessAction?: () => void;
}) {
  return <BasePupilForm type="add" onSuccessAction={onSuccessAction} />;
}

export function EditPupilForm({
  initialData,
  onSuccessAction,
}: {
  initialData: Partial<PupilInfo>;
  onSuccessAction?: () => void;
}) {
  return (
    <BasePupilForm
      type="edit"
      initialData={initialData}
      onSuccessAction={onSuccessAction}
    />
  );
}
