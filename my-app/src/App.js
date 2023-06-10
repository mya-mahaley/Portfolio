import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import About from "./Components/About";
import { Suspense } from "react";

function App() {
  return (
      <div>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/About" element={<About />} />
          </Routes>
         </Suspense>
      </div>
  );
}

export default App;
