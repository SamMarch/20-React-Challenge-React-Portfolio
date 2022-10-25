import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Header from "./Header";
import Footer from "./Footer";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col min-h-screen ml-72 mr-72">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="mx-auto my-auto">{renderPage()}</div>
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
