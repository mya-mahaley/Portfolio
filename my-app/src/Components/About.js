import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import MyNavigation from "./Navigation";
import Contact from "./Contact";


export default function About() {
    return (
        <div>
            <MyNavigation/>
            <Container>
                
                <h1>About me</h1>
            </Container>
            <Contact/>        
        </div>
    );
}