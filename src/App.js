import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Helmet } from 'react-helmet';
import {Resume} from './components/Resume';


function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
            <title> Lokesh </title>
        </Helmet>
        {/* NavBar is always present */}
        <NavBar />

        <Routes>
          {/* Main page with Banner */}
          <Route path="/portfolio" element={<Banner />} />

          {/* Separate page for Skills */}
          <Route path="/skills" element={<SkillsWithHelmet title=" Skills" />} />
          {/* Separate page for Projects */}
          <Route path="/projects" element={<ProjectsWithHelmet title="Projects" />} />
           {/* Separate page for Resume */}
           <Route path="/resume" element={<ResumeWithHelmet title="Resume" />} />
        </Routes>
      </div>
    </Router>
  );
}
function SkillsWithHelmet({ title }) {
  return (
    <>
      <Helmet>
          <title>{title}</title>
      </Helmet>
      <Skills />
    </>
  );
}

function ProjectsWithHelmet({ title }) {
  return (
    <>
      <Helmet>
          <title>{title}</title>
      </Helmet>
      <Projects />
    </>
  );
}
function ResumeWithHelmet({ title }) {
  return (
    <>
      <Helmet>
          <title>{title}</title>
      </Helmet>
      <Resume />
    </>
  );
}


export default App;
