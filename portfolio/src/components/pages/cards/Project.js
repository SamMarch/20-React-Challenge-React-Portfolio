import React from "react";

function Project({ id, title, path, github }) {
  return (
    <div className="p-5 shadow-md shadow-gray-300">
      <ul>
        <li key={id}>
          {title}
          <a href={path}> Link</a>
          <a href={github}> Github</a>
        </li>
      </ul>
    </div>
  );
}

export default Project;
