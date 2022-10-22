import React from "react";
import HelloReact from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <HelloReact />
      <Navigation />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
