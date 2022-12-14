import React from "react";
import Project from "./cards/Project";
import projects from "../../data/projectData";

function Portfolio() {
  const renderProjects = () => {
    return projects.map((project) => {
      return <Project key={project.id} {...project} />;
    });
  };
  return <div className="grid grid-cols-3 gap-5">{renderProjects()}</div>;
}

export default Portfolio;
