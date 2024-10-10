import PageWrapper from "../../layouts/pageWrappers/PageWrapper";
import { getAllProjects } from "../../services/api/getAllProjects";
import { useEffect, useState } from "react";

export function Home() {
  //const [projects, setProjects] = useState([]);
  //const refreshToken : string | null = localStorage.getItem("refreshToken");

  useEffect(() => {
    try {
      //if (token){
      //  Need to change the way to look for projects
      //  listOfProjects = getAllProjects(userId, token);
      //}
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <PageWrapper>
      <div>body</div>
    </PageWrapper>
  );
}
