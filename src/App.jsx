import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import TargetCursor from "./components/TargetCursor";

import ProjectDetails from "./pages/ProjectDetails";

// HomePage with optional TargetCursor
const HomePage = () => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer: fine)").matches;
    setShowCursor(hasMouse);
  }, []);

  return (
    <>
      {showCursor && <TargetCursor spinDuration={7} hideDefaultCursor={true} />}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
