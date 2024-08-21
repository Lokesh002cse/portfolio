import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar is always present */}
        <NavBar />

        <Routes>
          {/* Main page with Banner */}
          <Route path="/portfolio" element={<Banner />} />

          {/* Separate page for Skills */}
          <Route path="/skills" element={<Skills />} />
          {/* Separate page for Projects */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
