import React from "react";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Home from "./component/Home";
import Experience from "./component/Experience";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />

        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
