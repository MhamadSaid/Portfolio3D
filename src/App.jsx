import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import Pages from "./Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
