import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="flex">
      <ul className="p-3 ml-auto">
        <li className="inline-block py-2 px-4">
          <button
            href="#about"
            onClick={() => handlePageChange("About")}
            className={"" + currentPage === "About" ? "active" : "inactive"}
          >
            About
          </button>
        </li>
        <li className="inline-block py-2 px-4">
          <button
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={currentPage === "Portfolio" ? "active" : "inactive"}
          >
            Portfolio
          </button>
        </li>
        <li className="inline-block py-2 px-4">
          <button
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "active" : "inactive"}
          >
            Contact
          </button>
        </li>
        <li className="inline-block py-2 px-4">
          <button
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "active" : "inactive"}
          >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
