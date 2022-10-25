import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1 className="bg-red-500 p-5">Sam March</h1>
      <div className="bg-sky-400">
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Header;
