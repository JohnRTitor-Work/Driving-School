import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPupil, deletePupilById } from "./pupil.api";
import { toast } from "sonner";

export function useAddPupil() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addPupil,
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Pupil added successfully.");
        queryClient.invalidateQueries({ queryKey: ["get-pupils"] });
      } else {
        toast.error(response.error?.details || "Something went wrong");
      }
    },
    onError: () => {
      toast.error("Pupil addition failed.");
    },
  });
}

export const useDeletePupilById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deletePupilById(id),
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Pupil deleted successfully.");
        queryClient.invalidateQueries({ queryKey: ["get-pupils"] });
      } else {
        toast.error(response.error?.details || "Something went wrong");
      }
    },
    onError: () => toast.error("Pupil deletion failed."),
  });
};
