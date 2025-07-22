import type { ErrorResponse } from "@/types";
import axios, { AxiosError } from "axios";

// note that this comes from `VITE_BACKEND_URL` in the .env file
// vite only exposes env vars prefixed with `VITE_` to the client
const BACKEND_URL: string = import.meta.env.BACKEND_URL;

// create an API connection using axios
const api = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// intercept requests, handle error if needed
api.interceptors.response.use(
  // everything ok, so just return the response
  (response) => {
    return response;
  },

  // oops something went wrong!
  // let's see if we can do something about it
  (err: AxiosError<ErrorResponse>) => {
    const { response, request, message } = err;

    if (response) {
      const { status } = response;
      const errorMessage = response.data.message || "An error occurred";

      switch (status) {
        case 400:
          console.error("Bad request:", errorMessage);

        case 401:
          console.error("Unauthorized: Please log in again");
          break;

        case 403:
          console.error("Forbidden: You do not have access");
          break;
        case 404:
          console.error("Resource not found");
          break;
        case 500:
          console.error("Server error: Please try again later");
          break;
        default:
          console.error("Unexpected error:", errorMessage);
      }
    } else if (request) {
      // no response, probably request never reached because of network error
      console.error("Network error: Please check your connection");
    } else {
      // something happened during setting up the request
      console.error("Request setup error:", message);
    }

    // Return a rejected promise with the error
    return Promise.reject(err);
  },
);

export default api;
