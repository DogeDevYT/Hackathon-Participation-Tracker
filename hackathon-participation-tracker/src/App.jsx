import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import GeneratePage from "./components/GeneratePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/generate" element={<GeneratePage />} />
      </Routes>
    </Router>
  )
}

export default App
