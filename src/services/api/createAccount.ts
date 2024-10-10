import axios from "axios";

const urlPathUsers: string = "http://localhost:8000/register/";

export async function createNewAccount(name: string, email: string, password: string) {
  axios
    .post(urlPathUsers, {
      username: name,
      email: email,
      password: password,
    })
    .catch((error) => {
      if (error.response) {
        console.error(
          `Error: ${error.response.status} - ${error.response.data.detail}`,
        );
        throw new Error("An error occurred while the request to the server");
      } else if (error.request) {
        console.error(`Error: ${error.data.detail}`);
        throw new Error("No response from the server.");
      } else {
        throw new Error("Request setup error.");
      }
    });
}
