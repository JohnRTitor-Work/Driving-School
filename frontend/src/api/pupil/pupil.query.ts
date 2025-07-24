import { useQuery } from "@tanstack/react-query";
import { getPupilById, getPupils } from "./pupil.api";
import type { PupilInfo } from "./pupil.api.schema";

export const useGetPupils = () =>
  useQuery<PupilInfo[]>({
    queryKey: ["get-pupils"],
    queryFn: () => getPupils(),
    select: (res: any) => res.data,
  });

export const useGetPupilById = (id: string) =>
  useQuery<PupilInfo>({
    queryKey: ["get-pupils", { id }],
    queryFn: () => getPupilById(id),
    select: (res: any) => res.data,
  });
