import axios, { AxiosResponse } from "axios";
import { Tokens } from "../../utils/types/types";

const urlPathUsers: string = "http://localhost:8000/login/";

export async function login(username: string, password: string): Promise<Tokens> {
  try {
      const response: AxiosResponse<Tokens> = await axios.post(urlPathUsers, {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error:any) {
    if (error.response) {
      console.error(
        `Error: ${error.response.status} - ${error.response.data.detail}`,
      );
      throw new Error("An error occurred during the request to the server.");
    } else if (error.request) {
      console.error(`Error: ${error.message}`);
      throw new Error("No response from the server.");
    } else {
      throw new Error("Request setup error.");
    }
  }
}
