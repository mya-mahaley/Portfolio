import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import MyNavigation from "./Navigation";
import Skills from "./Skills";
import Contact from "./Contact"
import resume from "../Assets/Icons/resume.png"
import experience from "../Assets/Icons/experience.png"
import education from "../Assets/Icons/education.png"
export default function Resume() {
    const educationHeader = "[AUG 2019 - MAY 2023]";
    return (
        <div>
            <MyNavigation/>
            <Container className="ProjectsContainer3">
                <Row >
                    <Col xs={8}>
                        <img className="ResumeHeader" src={resume} alt="Resume"/>
                        
                    </Col>
                    <Col className="ProjectTitleContainer">
                        <h3 className="IntroText">Download PDF Version</h3>
                    </Col>

                </Row>
            </Container> 
            <Container className="ProjectsContainer2">
                <Row >
                    <Col className="ProjectTitleContainer">
                        <Container className="IntroText">
                            <Row>
                                <h4 ><strong>The University of Texas at Austin</strong></h4>
                            </Row>
                            <Row>
                                <h5 ><strong>B.S IN COMPUTER SCIENCE </strong></h5>
                            </Row>
                            <Row>
                                <h6>{educationHeader}</h6>
                            </Row>
                        </Container>
                        
                    </Col>
                    <Col xs={6} className="">
                        <img className="ProjectsHeader" src={education} alt="Education"/>
                    </Col>
                    
                </Row>
                <Row className="ProjectTitleContainer2">
                    <Container ><h6 className="ProjectTextLeft"> <strong>Coursework: </strong>&nbsp;Computer Systems, Computer Architecture, Data Structures, iOS Development, Android Development
Algorithms + Complexity, Discrete Math, Vector Calculus, Linear Algebra, Differential, Integral, and Multivariable Calculus,
</h6></Container>

                </Row>
            </Container> 
            <Container className="ProjectsContainer">
                <Row className="ProjectTypeContainer">
                    <Col xs={2}>
                    </Col>
                    <Col className="">
                        <img className="ProjectsHeader" src={experience} alt="Experience"/>
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
                <Row className="ProjectTypeContainer">
                    <Col className="">
                        <Row>
                            <Container className="IntroText">
                                <Row>
                                    <h4 ><strong>Google SWE Intern</strong></h4>
                                </Row>
                            </Container>
                            </Row>
                            <Row>
                            <Container className="IntroText">
                                <Row>
                                    <h6 ><strong>May 2022 - Aug 2022</strong></h6>
                                </Row>
                            </Container>
                            </Row>
                    </Col>
                    
                    <Col className="">
                            <Container className="IntroText">
                                <Row>
                                    <h4><strong>Amazon SWE Intern</strong></h4>
                                </Row>
                            </Container>
                            <Container className="IntroText">
                                <Row>
                                    <h6 ><strong>May 2021 - Aug 2021</strong></h6>
                                </Row>
                            </Container>
                    </Col>
                    <Col className="">
                            <Container className="IntroText">
                                <Row>
                                    <h4 ><strong>AP Comp Sci Educator</strong></h4>
                                </Row>
                            </Container>
                            <Container className="IntroText">
                                <Row>
                                    <h6 ><strong>May 2022 - Aug 2022</strong></h6>
                                </Row>
                            </Container>
                    </Col>
                </Row>
            </Container> 
            {/* <Skills/> */}
            <Contact/>
        </div>
    );
}