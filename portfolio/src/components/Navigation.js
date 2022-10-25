import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="flex p-3">
      <li className="inline-block py-2 px-4">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={"" + currentPage === "About" ? "active" : "inactive"}
        >
          About
        </a>
      </li>
      <li className="inline-block py-2 px-4">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "active" : "inactive"}
        >
          Portfolio
        </a>
      </li>
      <li className="inline-block py-2 px-4">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "active" : "inactive"}
        >
          Contact
        </a>
      </li>
      <li className="inline-block py-2 px-4">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "active" : "inactive"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
