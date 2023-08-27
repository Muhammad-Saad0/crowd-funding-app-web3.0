import React from "react";
import ProjectDetails from "../Components/ProjectDetails";
import ProjectBackers from "../Components/ProjectBackers";
import UpdateProject from "../Components/UpdateProject";
import BackProject from "../Components/BackProject";
import DeleteProject from "../Components/DelateProject";

const Project = () => {
  return (
    <>
      <ProjectDetails />
      <ProjectBackers />
      <UpdateProject />
      <BackProject />
      <DeleteProject />
    </>
  );
};

export default Project;
