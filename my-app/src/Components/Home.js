import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { HashLink as Link } from 'react-router-hash-link';
import Contact from "./Contact";
import name from "../Assets/Icons/name.png"



export default function Home() {
    return (
        <div>
            <Container className="WebContainer">
                <Row >
                    <Col className="NameContainer">
                        <img className="NameHeader" src={name} alt="Mya Mahaley"/>
                    </Col>
                    <Col xs={6}>
                        <Grid  className="Links" container spacing={1} justifyContent="right" alignItems="right" >
                            <Grid item><Link to="/About"><h4 className="LinkButton" >ABOUT ME</h4></Link></Grid>
                            <Grid item><Link to="/Projects"><h4 className="LinkButton" >PROJECTS</h4></Link></Grid>
                            <Grid item><Link to="/Resume"><h4 className="LinkButton" >RESUME</h4></Link></Grid>
                            <Grid item><Link to="/Resume#Experience"><h4 className="LinkButton" >EXPERIENCE</h4></Link></Grid>
                            <Grid item><Link to="#Skills"><h4 className="LinkButton">SKILLS</h4></Link></Grid>
                            <Grid item><Link to="#Contact"><h4 className="LinkButton" >CONTACT</h4></Link></Grid>                                
                        </Grid>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}/>
                    <Col>
                        <h3 className="IntroText">I AM A SOFTWARE DEVELOPER AND DESIGNER BASED IN TEXAS. I RECENTLY
                            GRADUATED FROM THE UNIVERSITY OF TEXAS AT AUSTIN, WITH A BACHELOR'S
                            DEGREE IN COMPUTER SCIENCE.
                        </h3>

                    </Col>
                </Row>
            </Container>
            <Contact id="Contact"/>           
        </div>
    );
}