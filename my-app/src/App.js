import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import logo from "./Assets/Icons/logo.png"


function Navigation() {
  return (
    <Navbar variant="dark">
      <Container>
      
        <Nav className="ms-auto">
          <Nav.Link className='NavBar' as={Link} to="/">HOME</Nav.Link>
          <Nav.Link className='NavBar' as={Link} to="/Projects">PROJECTS</Nav.Link>
          <Nav.Link className='NavBar' as={Link} to="/Projects">EXPERIENCE</Nav.Link>
       </Nav>
       <Navbar.Brand className="Brand"><img className='BrandImg' src={logo} alt="MM"/></Navbar.Brand>
      </Container>
    </Navbar>
  )
}
function App() {
  return (
      <div>
        <Suspense fallback={null}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
         </Suspense>
      </div>
  );
}

export default App;
