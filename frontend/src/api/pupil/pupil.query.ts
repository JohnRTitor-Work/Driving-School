import { useQuery } from "@tanstack/react-query";
import { getPupils } from "./pupil.api";
import type { AddPupilPayload } from "./pupil.api.schema";

export const useGetPupils = () =>
  useQuery<AddPupilPayload[]>({
    queryKey: ["get-pupils"],
    queryFn: () => getPupils(),
    select: (res: any) => res.data,
  });
