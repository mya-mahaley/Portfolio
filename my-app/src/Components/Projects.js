import "bootstrap/dist/css/bootstrap.min.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Grid } from "@mui/material";
import github from "../Assets/Icons/github.png"
import MyNavigation from "./Navigation";
import projects from "../Assets/Icons/projects.png"
import Contact from "./Contact";
import sbHome from "../Assets/Projects/ScreenBreak/home.png"
import sbRestriction from "../Assets/Projects/ScreenBreak/restriction.png"
import sbShield from "../Assets/Projects/ScreenBreak/shield.png"
import sbScreenTime from "../Assets/Projects/ScreenBreak/appView.png"
import alHome from "../Assets/Projects/AdLunam/alHome.png"
import alLogin from "../Assets/Projects/AdLunam/alLogin.png"
import alModel from "../Assets/Projects/AdLunam/alModel.png"
import alMoon from "../Assets/Projects/AdLunam/alMoon.png"
import alPic from "../Assets/Projects/AdLunam/alPic.png"
import alSearch from "../Assets/Projects/AdLunam/alSearch.png"
import alTrivia from "../Assets/Projects/AdLunam/alTrivia.png"
import ssConnect from "../Assets/Projects/SoundStats/ssConnect.png"
import ssCustom from "../Assets/Projects/SoundStats/ssCustom.png"
import ssDetails from "../Assets/Projects/SoundStats/ssDetails.png"
import ssLaunch from "../Assets/Projects/SoundStats/ssLaunch.png"
import ssMood from "../Assets/Projects/SoundStats/ssMood.png"
import ssMoodGreen from "../Assets/Projects/SoundStats/ssMoodGreen.png"
import ssOverview from "../Assets/Projects/SoundStats/ssOverview.png"
import ssSetting from "../Assets/Projects/SoundStats/ssSetting.png"
import ssTop from "../Assets/Projects/SoundStats/ssTop.png"
import pmDemo from "../Assets/Projects/PlayMaker/pmDemo.gif"


function ProjectContent({projectType}){
    if (projectType === "web") {
        return (
            <div>
                <Container className="ProjectsTypeContainer">
                    <h1 className="ProjectTypeTitle">WEB PROJECTS</h1>
                </Container>
                <Container className="ProjectsContainer3">
                    <Row>
                         <Col className="ProjectTitleContainer">
                            <a href="https://mya-mahaley.github.io/PlayMaker/#/" target="_blank" rel="noreferrer"><h1 className="ProjectTitle">PlayMaker</h1></a>
                            <a href="https://github.com/mya-mahaley/PlayMaker" target="_blank" rel="noreferrer"><img className="ContactIcon" src={github} alt="GitHub"/></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row className="ProjectTextContainer">
                            
                           
                            <Col className="ProjectTypeContainer">
                            <h4 className="ProjectText"><strong>PlayMaker is a website designed for users to create, and save intricate sports plays.</strong></h4>
                            </Col>
                            <Col xs={8}><a href="https://mya-mahaley.github.io/PlayMaker/#/" target="_blank" rel="noreferrer"><img className="GifDemo" src={pmDemo} alt="Demo of PlayMaker"/></a></Col>
                            </Row>
                            
                            <Row className="ProjectTextContainer">
                                <h5 className="ProjectTextLeft">
                                    <strong>Features </strong>
                                    <ul>
                                        <li><h6>Drawing Arrows and Lines</h6></li>
                                        <li><h6>Adding Shapes </h6></li>
                                        <li><h6>Changing Backgrounds</h6></li>
                                        <li><h6>Note Taking</h6></li>
                                        <li><h6>Persistence via Firebase</h6></li>
                                        <li><h6>Functional Undo + Redo</h6></li>
                                        <li><h6>Firebase Login</h6></li>
                                    </ul>
                                    
                                </h5>
                                <h5 className ="ProjectTextLeft">
                                    <strong>Languages:&nbsp;</strong> JavaScript + HTML
                                </h5>
                            </Row>
                        </Col>
                    </Row>
                    
                </Container>
               
            </div>
        )
    }

    else if (projectType === "android") {
        return (
            <div>
                <Container className="ProjectsTypeContainer">
                    <h1 className="ProjectTypeTitle">ANDROID PROJECTS</h1>
                </Container>
                <Container className="ProjectsContainer3">
                    <Row>

                         <Col className="ProjectTitleContainer">
                            <h1 className="ProjectTitle">AdLunam</h1>
                            <a href="https://github.com/mya-mahaley/AdLunam" target="_blank" rel="noreferrer"><img className="ContactIcon" src={github} alt="GitHub"/></a>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Carousel showThumbs={false} useKeyboardArrows={true}>
                                <img className="CarouselImage" src={alHome} alt="AdLunam Home Page"/>
                                <img className="CarouselImage" src={alModel} alt="AdLunam 3d Model"/>
                                <img className="CarouselImage" src={alSearch} alt="AdLunam Search Engine"/>
                                <img className="CarouselImage" src={alMoon} alt="AdLunam Current Moon Phase" />  
                                <img className="CarouselImage" src={alTrivia} alt="AdLunam Trivia"/>  
                                <img className="CarouselImage" src={alPic} alt="AdLunam Picture of the Day"/>  
                                <img className="CarouselImage" src={alLogin} alt="AdLunam Login"/>  
                            </Carousel>
                        </Col>
                        <Col >
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectText"><strong>Ad Lunam is an exploratory application that allows users to expand their knowledge about Astronomy.</strong></h5>
                            </Row>
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectTextLeft">
                                    <strong>Features </strong>
                                    <ul>
                                        <li><h6>Solar System 3D Model Viewer</h6></li>
                                        <li><h6>NASA Image Search Engine</h6></li>
                                        <li><h6>Current Moon Phase</h6></li>
                                        <li><h6>Astronomy Trivia</h6></li>
                                        <li><h6>NASA Picture of the Day</h6></li>
                                        <li><h6>Firebase Login</h6></li>
                                    </ul>
                                    
                                </h5>
                                <h5 className ="ProjectTextLeft">
                                    <strong>Languages:&nbsp;</strong> Kotlin + HTML
                                </h5>
                            </Row>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }

    else if (projectType === "iOS") {
        return (
            <div>
                <Container className="ProjectsTypeContainer">
                    <h1 className="ProjectTypeTitle">iOS PROJECTS</h1>
                </Container>
                <Container className="ProjectsContainer">
                    <Row>
                         <Col className="ProjectTitleContainer">
                            <h1 className="ProjectTitle">ScreenBreak</h1>
                            <a href="https://github.com/christianp-622/ScreenBreak" target="_blank" rel="noreferrer"><img className="ContactIcon" src={github} alt="GitHub"/></a>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Carousel showThumbs={false} useKeyboardArrows={true}>
                                <img className="CarouselImage" src={sbRestriction} alt="ScreenBreak Restriction Page"/>
                                <img className="CarouselImage" src={sbShield} alt="ScreenBreak Shield"/>
                                <img className="CarouselImage" src={sbHome} alt="ScreenBreak Home Page"/>
                                <img className="CarouselImage" src={sbScreenTime} alt="ScreenBreak App View"/>  
                            </Carousel>
                        </Col>
                        <Col>
                            <Row className="ProjectTextContainer">
                                <h5 className="ProjectText"><strong>ScreenBreak offers advanced Screen Time restrictions and monitoring. This project explores the capabilities of the iOS 16 Screen Time framework.</strong></h5>
                            </Row>
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectTextLeft">
                                <strong>Features</strong>
                                <ul>
                                <li><h6>Interactive Screen Time Statistics</h6></li>
                                <li><h6>Screen Time Restrictions + Notifications</h6></li>
                                <li><h6>Screen Time Shields</h6></li>
                                </ul>
                            </h5>
                            <h5 className ="ProjectTextLeft">
                                    <strong>Languages:&nbsp;</strong> SwiftUI
                            </h5>
                            </Row>
                        </Col>
                        
                    </Row>
                    
                </Container>
                <Container className="ProjectsContainer2">
                    <Row>
                         <Col className="ProjectTitleContainerRight">
                            
                            <a href="https://github.com/mya-mahaley/SoundStats" target="_blank" rel="noreferrer"><img className="ContactIcon" src={github} alt="GitHub"/></a>
                            <h1 className="ProjectTitle">SoundStats</h1>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col >
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectText"><strong>After connecting their Spotify Account, SoundStats allows users to view and share customizable graphics based on their music taste.</strong></h5>
                            </Row>
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectTextLeft">
                                <strong>Features </strong>
                                <ul>
                                <li><h6>Firebase Login</h6></li>
                                <li><h6>Spotify Connection</h6></li>
                                <li><h6>Customizable + Sharable Graphics created with Placid</h6></li>
                                </ul>
                            </h5>
                            <h5 className ="ProjectTextLeft">
                                    <strong>Languages:&nbsp;</strong> UIKit + Objective C
                                </h5>
                            </Row>
                        </Col>
                        <Col xs={4}>
                            <Carousel showThumbs={false} useKeyboardArrows={true}>
                                <img className="CarouselImage" src={ssLaunch} alt="SoundStats Launch Screen"/>
                                <img className="CarouselImage" src={ssConnect} alt="SoundStats Connect Screen"/>
                                <img className="CarouselImage" src={ssOverview} alt="SoundStats Overview Graphic"/>
                                <img className="CarouselImage" src={ssMood} alt="SoundStats Mood Graphic"/>
                                <img className="CarouselImage" src={ssTop} alt="SoundStats Top Songs Graphic"/>
                                <img className="CarouselImage" src={ssCustom} alt="SoundStats Customization Page"/>
                                <img className="CarouselImage" src={ssMoodGreen} alt="SoundStats Customized Mood Graphic"/>
                                <img className="CarouselImage" src={ssDetails} alt="SoundStats Detail Popup"/>
                                <img className="CarouselImage" src={ssSetting} alt="SoundStats Settings"/>
                            </Carousel>
                        </Col>
                        
                    </Row>
                    
                </Container>
            </div>
        )
    } 

    else {
        return (
            <div></div>
        )
    } 
}
export default function Projects() {
    const [projectType, setProjectType] = useState("")

    

    return (       
        <div>

                <MyNavigation/>
                <Container >
                    <Row className="ProjectTitleContainer">
                        <Col>
                            <img className="ProjectsHeader" src={projects} alt="Projects"/>
                        </Col>
                        <Col className="ProjectTypeContainer">
                        <Grid  className="Links" container spacing={1} justifyContent="left" alignItems="left" >
                                <Grid item xs={12}><Button className="TypeButton" onClick={() => setProjectType("iOS")}>iOS</Button></Grid>
                                <Grid item xs={12}><Button className="TypeButton" onClick={() => setProjectType("android")}>ANDROID</Button></Grid>
                                <Grid item xs={12}><Button className="TypeButton" onClick={() => setProjectType("web")}>WEB</Button></Grid>                              
                            </Grid>
                        </Col>
                        
                    </Row>
                </Container>
                <ProjectContent projectType={projectType}/>
                <Contact/>
        </div>
    );
}