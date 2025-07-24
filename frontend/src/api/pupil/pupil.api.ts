import api from "@/lib/axios-instance";
import type { AddPupilPayload, PupilInfo } from "./pupil.api.schema";
import type { AxiosError, AxiosResponse } from "axios";
import type { ErrorResponse } from "@/types";

export async function addPupil(payload: AddPupilPayload) {
  try {
    const response = await api.post("/pupils", payload);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    console.error("Add Pupil Error:", error.response?.data || error.message);
    return error.response?.data;
  }
}

export const deletePupilById = async (id: string) => {
  try {
    const response = await api.delete(`/pupils/${id}`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    console.error(
      "Delete Pupil By Id Error:",
      error?.response?.data || error.message,
    );
    return error.response?.data;
  }
};

export async function getPupils() {
  try {
    const response = await api.get("/pupils");
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    console.error("Get Pupils Error:", error.response?.data || error.message);
  }
}

export async function getPupilById(id: string) {
  try {
    const response = await api.get(`/pupils/${id}`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    console.error(
      "Get Pupil By Id Error:",
      error.response?.data || error.message,
    );
  }
}
