import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from "../Assets/Icons/logo.png"

export default function MyNavigation() {
    return (
      <Navbar variant="dark">
        <Container>
          <Nav className="ms-auto">
            <Nav.Link className='NavBar' as={Link} to="/Projects">PROJECTS</Nav.Link>
            <Nav.Link className='NavBar' as={Link} to="/Resume">RESUME</Nav.Link>
            <Nav.Link className='NavBar' as={Link} to="/About">ABOUT ME</Nav.Link>
         </Nav>
         <Navbar.Brand className="Brand" as={Link} to="/"><img className='BrandImg' src={logo} alt="MM"/></Navbar.Brand>
        </Container>
      </Navbar>
    )
  }