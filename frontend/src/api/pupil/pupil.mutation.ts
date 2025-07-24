import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPupil, deletePupilById, editPupilById } from "./pupil.api";
import { toast } from "sonner";
import type { AddPupilPayload } from "./pupil.api.schema";

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

export const useEditPupilById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: string;
      payload: AddPupilPayload;
    }) => {
      return editPupilById(id, payload);
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success("Pupil edited successfully.");
        queryClient.invalidateQueries({ queryKey: ["get-pupils"] });
      } else {
        toast.error(response.error?.details || "Something went wrong");
      }
    },
    onError: () => toast.error("Pupil edit failed."),
  });
};

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
