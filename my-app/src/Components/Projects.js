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





function ProjectContent({projectType}){

    const iOS = [
        { url: "../Assets/Icons/projects.png" },
        { url: "../Assets/Icons/email.png" },
        { url: "../Assets/Icons/skills.png" },
      ];
    if (projectType === "web") {
        return (
            <div>
                <h1>MY WEB PROJECTS ... coming soon! </h1>
                <Container className="WebContainer">
                    <h1>MY WEB PROJECTS</h1>
                </Container>
               
            </div>
        )
    }

    else if (projectType === "android") {
        return (
            <div>
                <Container className="ProjectsContainer">
                    <Row>

                         <Col className="ProjectTitleContainer">
                            <h1 className="ProjectTitle">AdLunam</h1>
                            <a href="https://github.com/mya-mahaley/AdLunam" target="_blank"><img className="ContactIcon" src={github} alt="GitHub"/></a>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <Carousel showThumbs={false} useKeyboardArrows={true}>
                                <img className="CarouselImage" src={alHome} alt="ScreenBreak Restriction Page"/>
                                <img className="CarouselImage" src={alModel} alt="ScreenBreak Shield"/>
                                <img className="CarouselImage" src={alSearch} alt="ScreenBreak Home Page"/>
                                <img className="CarouselImage" src={alMoon} alt="ScreenBreak App View"/>  
                                <img className="CarouselImage" src={alTrivia} alt="ScreenBreak App View"/>  
                                <img className="CarouselImage" src={alPic} alt="ScreenBreak App View"/>  
                                <img className="CarouselImage" src={alLogin} alt="ScreenBreak App View"/>  
                            </Carousel>
                        </Col>
                        <Col >
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectText">Ad Lunam is an exploratory application that allows users to expand their knowledge about astronomy.</h5>
                            </Row>
                            <Row className="ProjectTextContainer">
                            <h5 className="ProjectText">Features:</h5>
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
            <Container className="ProjectsContainer">
                    <Row>
                         <Col className="ProjectTitleContainer">
                            <h1 className="ProjectTitle">ScreenBreak</h1>
                            <a href="https://github.com/christianp-622/ScreenBreak" target="_blank"><img className="ContactIcon" src={github} alt="GitHub"/></a>
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
                        <Col className="ProjectTextContainer">
                            <h4 className="ProjectText">ScreenBreak offers advanced Screen Time restrictions and monitoring. This project explores the capabilities of the iOS 16 Screen Time framework.</h4>
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