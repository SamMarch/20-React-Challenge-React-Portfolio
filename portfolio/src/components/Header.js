import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1 className="bg-gray-900 p-5 text-gray-300 text-4xl">Sam March</h1>
      <div className="bg-gray-900 text-gray-400 border-t border-b">
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Header;
