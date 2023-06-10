import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import MyNavigation from "./Navigation";
import Skills from "./Skills";
import Contact from "./Contact"
export default function Resume() {
    return (
        <div>
            <MyNavigation/>
            <Container>
                <h1>Resume</h1>
            </Container> 
            <Skills/>
            <Contact/>
        </div>
    );
}