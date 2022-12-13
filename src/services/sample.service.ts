import axios from "axios";
import { VITE_API } from "@config";

export const sampleService = () => {
  axios
    .get(VITE_API)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
      }
    });
};
