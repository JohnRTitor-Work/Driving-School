import { useMutation } from "@tanstack/react-query";
import { addPupil } from "./pupil.api";
import { toast } from "sonner";

export function useAddPupil() {
  return useMutation({
    mutationFn: addPupil,
    onSuccess: () => {
      toast.success("Pupil added successfully.");
    },
    onError: () => {
      toast.error("Pupil update failed.");
    },
  });
}
