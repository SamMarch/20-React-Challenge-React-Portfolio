import React from "react";

function Project({ title, path, github }) {
  return (
    <div className="bg-cyan-500 p-10">
      <h1>Project: {title}</h1>
      <p>
        Link:{" "}
        <a href={path} target="_blank" rel="noreferrer">
          {path}
        </a>
      </p>
      <p>
        Github:{" "}
        <a href={github} target="_blank" rel="noreferrer">
          {github}
        </a>
      </p>
    </div>
  );
}

export default Project;
