import React from "react";
import Project from "../Project";

function Portfolio() {
  return (
    <div className="bg-cyan-500 p-10">
      <h1>Portfolio</h1>
      <div className="grid grid-cols-3">
        <Project title="Project 1" path="#" github="#" />
        <Project title="Project 2" path="#" github="#" />
        <Project title="Project 3" path="#" github="#" />
        <Project title="Project 4" path="#" github="#" />
        <Project title="Project 5" path="#" github="#" />
        <Project title="Project 6" path="#" github="#" />
      </div>
    </div>
  );
}

export default Portfolio;
