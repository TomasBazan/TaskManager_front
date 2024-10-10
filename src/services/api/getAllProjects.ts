import axios from "axios";

const urlPathUsers: string = "http://localhost:8000/projects";

export async function getAllProjects(id: number, token: string) {
  axios.get(`${urlPathUsers}/${id}`, { headers: {'Authorization': `Bearer ${token}`}}).catch((error) => {
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
