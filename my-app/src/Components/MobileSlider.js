import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import email from "../Assets/Icons/email.png"
import linkedin from "../Assets/Icons/linkedin.png"
import github from "../Assets/Icons/github.png"

export default function MobileSlider({images}) {
    return (
        <div>
            <Container id="Contact" className="ContactContainer">
                <Row><h3 className="ContactText">CONTACT ME!</h3></Row>
                <Row>
                <Container className="ContactIconContainer">
                    <a href="mailto:mya.mahaley@gmail.com" target="_blank"><img className="ContactIcon" src={email} alt="Email"/></a>
                    <a href="https://www.linkedin.com/in/mya-mahaley-09a7591ab/" target="_blank"><img className="ContactIcon" src={linkedin} alt="LinkedIn"/></a>
                    <a href="https://github.com/mya-mahaley?tab=repositories" target="_blank"><img className="ContactIcon" src={github} alt="GitHub"/></a>
                </Container>
                </Row>
                
                <Row><h6 className="ContactText">MYA.MAHALEY@GMAIL.COM</h6></Row>
            </Container>
        </div>
    );
}