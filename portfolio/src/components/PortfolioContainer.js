import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Header from "./Header";
import Footer from "./Footer";

function PortfolioContainer() {
  const [currentPage, serCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => serCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
