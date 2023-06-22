import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import MyNavigation from "./Navigation";
import { MoonModel }  from "../Assets/Models/Moon"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment} from "@react-three/drei";
import { Suspense } from "react";
import Contact from "./Contact";
import myasCorner from "../Assets/Icons/myascorner.png"
import mediaMonth from "../Assets/Icons/mediaMonth.png"
import personality from "../Assets/Icons/personality.png"
import loveIsland from "../Assets/Media/loveIsland.png"
import interstellar from "../Assets/Media/interstellar.jpeg"
import mbti from "../Assets/Media/mbti.png"
import { Stage } from "@react-three/drei";


export default function About() {
    return (
        <div>
            <MyNavigation/>
            <Container>
                <Row>
                    <Col xs={7} className="AboutContainer1">
                        <img className="ResumeHeader" src={myasCorner} alt="Mya's Corner"/>
                    </Col>
                    <Col className="AboutContainer1">
                        <h3 className="IntroText">Welcome to a peak inside my life!</h3>
                    </Col>
                </Row>

                
                <Row>
                   
                    <Col className="AboutContainer2">
                        <Row>
                            <Col>
                                <img className="MediaFrame" src={loveIsland} alt="Love Island Season 10"></img>
                            </Col>
                            <Col>
                            <img className="MediaFrame" src={interstellar} alt="Interstellar"></img>
                            </Col>
                        </Row>               
                      
                    </Col>
                     <Col xs={5} className="AboutContainer3">
                        <img className="ProjectsHeader" src={mediaMonth} alt="Media of the Month"/>
                    </Col>
                </Row>
                <Row className="AboutContainer2">
                    <Col className="">
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0"  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/young-folks/1442990312?i=1442990320"/>
                    </Col>
                    <Col className="">
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/brother/1316215551?i=1316215552"></iframe>
                    </Col>
                    <Col className="">
                        <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/lost-in-translation/1525010103?i=1525010455"></iframe>
                    </Col>
                    
                </Row>
                <Row className="AboutContainer4" id="Experience">
                    <Row className="ProjectTypeContainer">
                        <Col xs={2}>
                        </Col>
                        <Col className="">
                            <img className="AstrologyHeader" src={personality} alt="Personality Insights"/>
                        </Col>
                        <Col xs={2}>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="">
                            <Container className="IntroText">
                                    <h1 ><strong>My Astrology Big Three</strong></h1>
                            </Container>
                            <Container className="IntroText">
                                    <h2 ><strong>Sun:</strong>&nbsp;Cancer</h2>
                                    <h2 ><strong>Moon:</strong>&nbsp;Cancer</h2>
                                    <h2 ><strong>Rising:</strong>&nbsp;Virgo</h2>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="IntroText">
                                    <a href="https://www.16personalities.com/intj-personality" target="_blank"><h2 ><strong>MBTI: </strong>&nbsp;INTJ</h2></a>
                            </Container>
                            <Container className="IntroText">
                                <img className="MediaFrame" src={mbti} alt="INTJ"/>
                            </Container>
                        </Col>
                            
                    </Row>
                </Row>
            </Container>
            <Contact/>        
        </div>
    );
}