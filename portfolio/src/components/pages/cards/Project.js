import React from "react";

function Project({ id, title, path, github }) {
  return (
    <ul>
      <li key={id}>
        {title}
        <a href={path}>Link</a>
        <a href={github}>Github</a>
      </li>
    </ul>
  );
}

export default Project;
