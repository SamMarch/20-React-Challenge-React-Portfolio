import React from "react";

function Navigation() {
  return (
    <nav className="bg-orange-500 p-5">
      <ul className="flex flex-row-reverse gap-5 mr-5">
        <li>Resume</li>
        <li>Contact</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navigation;
