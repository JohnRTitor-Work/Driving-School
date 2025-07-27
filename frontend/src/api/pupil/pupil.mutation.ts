import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addPupil,
  deletePupilById,
  deletePupilsByIds,
  editPupilById,
} from "./pupil.api";
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

export function useEditPupilById() {
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
}

export function useDeletePupilById() {
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
}

export function useDeletePupilsByIds() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (ids: string[]) => deletePupilsByIds(ids),
    onSuccess: (response) => {
      const deletedCount = response.deleted?.length ?? 0;
      const failedCount = response.failed?.length ?? 0;

      const pluralize = (count: number, word: string) =>
        `${count} ${word}${count !== 1 ? "s" : ""}`;

      if (deletedCount > 0 && failedCount === 0) {
        toast.success(
          `${pluralize(deletedCount, "pupil")} deleted successfully.`,
        );
        queryClient.invalidateQueries({ queryKey: ["get-pupils"] });
      } else if (deletedCount > 0 && failedCount > 0) {
        toast(
          `${pluralize(deletedCount, "pupil")} deleted, ${pluralize(
            failedCount,
            "pupil",
          )} could not be deleted.`,
          { description: "Some deletions were unsuccessful." },
        );
        queryClient.invalidateQueries({ queryKey: ["get-pupils"] });
      } else if (deletedCount === 0 && failedCount > 0) {
        toast.error(`Failed to delete ${pluralize(failedCount, "pupil")}.`);
      } else {
        toast.error("Something went wrong");
      }
    },
    onError: () => toast.error("Pupil deletion failed."),
  });
}
