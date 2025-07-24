import { useMutation } from "@tanstack/react-query";
import { addPupil } from "./pupil.api";
import { toast } from "sonner";

export function useAddPupil() {
  return useMutation({
    mutationFn: addPupil,
    onSuccess: (res) => {
      if (res.success) {
        toast.success("Pupil added successfully.");
      }
    },
    onError: () => {
      toast.error("Pupil addition failed.");
    },
  });
}
