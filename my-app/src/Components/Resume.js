import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavigation from "./Navigation";
import Skills from "./Skills";
import Contact from "./Contact"
import resume from "../Assets/Icons/resume.png"
import projects from "../Assets/Icons/projects.png"
import experience from "../Assets/Icons/experience.png"
import education from "../Assets/Icons/education.png"
import resumeFile from "../Assets/Projects/MyaMahaleyResume.pdf"
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
                        <a href={resumeFile} target = "_blank"><h3 className="LinkButton" >Open PDF Version</h3></a>
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
            <Container className="ProjectsContainer" id="Experience">
                <Row className="ProjectTypeContainer">
                    <Col xs={2}>
                    </Col>
                    <Col className="">
                        <img className="ProjectsHeader" src={experience} alt="Experience"/>
                    </Col>
                    <Col xs={2}>
                    </Col>
                </Row>
                <Row className="">
                    <Col className="">
                            <Container className="IntroText">
                                    <h4 ><strong>Google SWE Intern</strong></h4>
                            </Container>
                            <Container className="IntroText">
                                    <h6 ><strong>May 2022 - Aug 2022</strong></h6>
                            </Container>
                            <Container className="ProjectText">
                                <ul>
                                    <li>Utilized Java, SQL and Android Studio to optimize the visual experience of Google Photos users.</li>
                                    <li>Implemented a scoring algorithm based on photo metadata.</li>
                                    <li>Used scores to determine which photos should be highlighted on the user’s home page.</li>
                                </ul>
                            </Container>
                    </Col>
                    
                    <Col className="">
                            <Container className="IntroText">
                                    <h4><strong>Amazon SWE Intern</strong></h4>
                            </Container>
                            <Container className="IntroText">
                                    <h6 ><strong>May 2021 - Aug 2021</strong></h6>
                            </Container>
                            <Container className="ProjectText">
                                <ul>
                                    <li>Deployed and AWS Elasticsearch instance to allow recruiters and managers visualize the status of Amazon applicants.</li>
                                    <li>Optimized and automated the transfer of applicant data into an Elasticsearch database using AWS S3.</li>
                                    <li>Created a written guideline and tutorial videos for launching future instances of this database across Amazon's HR teams</li>
                                </ul>
                            </Container>
                    </Col>
                </Row>
            </Container> 
            <Skills id="Skills"/>
            <Container className="ResumeProjectsContainer">

                <Row> <Col className="ProjectTitleContainer">
                        <Link to="/Projects"><h4 className="LinkButton" >View More Project Details</h4></Link>
                    </Col>
                    <Col xs={7}>
                        <img className="ProjectsHeader" src={projects} alt="Projects"/> 
                    </Col></Row>
                    <Row className="ResumeProjectRow">
                        <Col className="">
                                <Container className="IntroText">
                                        <h4 ><strong>ScreenBreak</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>App Development, Spring 2023</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Created an iOS application using SwiftUI, Apple's Screen Time API, and Firebase. Prototyped wireframes using Figma.</li>
                                        <li>Acquired data about user's phone usage via the Family Controls, Device Activity, and Managed Settings Frameworks.</li>
                                        <li>Explored the Family Controls, Device Activity, and Managed Settings Framework.</li>
                                    </ul>
                                </Container>
                        </Col>
                        
                        <Col className="">
                                <Container className="IntroText">
                                        <h4><strong>PlayMaker</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>HCI, Spring 2023</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Developed a ReactJS websites that allows users to draw and save play diagrams for sports various sports.</li>
                                        <li>Completed various phases of user testing and formal experiments to improve our prototypes and final designs</li>
                                        <li>Followed design principles to improve styling and accessibility</li>
                                    </ul>
                                </Container>
                        </Col>
                    </Row>
                    <Row className="ResumeProjectRow">
                        <Col className="">
                                <Container className="IntroText">
                                        <h4 ><strong>AdLunam</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>App Development, Spring 2023</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Implemented an educational astronomy Android application using Kotlin</li>
                                        <li>Consolidated data from various NASA APIs to create an astronomy search engine and an educational trivia game</li>
                                        <li>Utilized Firebase to allow users to create accounts. Allowed users to view the current moon phase using location services.</li>
                                    </ul>
                                </Container>
                        </Col>
                        
                        <Col className="">
                                <Container className="IntroText">
                                        <h4><strong>SoundStats</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>iOS Mobile Development, Fall 2022</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Developed an iOS application using UIKit & Firebase that provided users with graphics about their music streaming habits</li>
                                        <li>Extracted data from the Spotify API and developed algorithms that detect the average mood of a listener's music choices</li>
                                    </ul>
                                </Container>
                        </Col>
                    </Row>
                    <Row className="ResumeProjectRow">
                        <Col className="">
                                <Container className="IntroText">
                                        <h4 ><strong>Find-A-Home</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>Software Engineering, Spring 2022</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Created a website with the goal of providing access to consolidated data about the best countries to immigrate to</li>
                                        <li>mplemented the frontend interactivity using ReactJS</li>
                                        <li>Developed a backend database and API using Python and SQL, Deployed with AWS</li>
                                    </ul>
                                </Container>
                        </Col>
                        
                        <Col className="">
                                <Container className="IntroText">
                                        <h4><strong>Digital Divas Competition</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>Spring 2019</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Organized an all-girls coding competition for over 100 competitors</li>
                                        <li>Coordinated communication with sponsors including AT&T, Oracle, IBM, and more</li>
                                    </ul>
                                </Container>
                        </Col>
                    </Row>
             </Container>
            <Contact/>
        </div>
    );
}