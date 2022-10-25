import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="flex flex-wrap list-none pl-0 mb-0 border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200">
      <li className="">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={
            currentPage === "About"
              ? "inline-block py-2 px-4 no-underline active"
              : "inline-block py-2 px-4 no-underline"
          }
        >
          About Me
        </a>
      </li>
      <li className="">
        <a
          href="#Project"
          onClick={() => handlePageChange("Project")}
          className={
            currentPage === "Project"
              ? "inline-block py-2 px-4 no-underline active"
              : "inline-block py-2 px-4 no-underline"
          }
        >
          Projects
        </a>
      </li>
      <li className="">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={
            currentPage === "Contact"
              ? "inline-block py-2 px-4 no-underline active"
              : "inline-block py-2 px-4 no-underline"
          }
        >
          Contact Info
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
