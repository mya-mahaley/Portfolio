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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import MyNavigation from "./Navigation";
import projects from "../Assets/Icons/projects.png"
import Contact from "./Contact";
import sbHome from "../Assets/Projects/ScreenBreak/home.png"
import sbRestriction from "../Assets/Projects/ScreenBreak/restriction.png"
import sbShield from "../Assets/Projects/ScreenBreak/shield.png"
import sbScreenTime from "../Assets/Projects/ScreenBreak/appView.png"



function ProjectContent({projectType}){

    const iOS = [
        { url: "../Assets/Icons/projects.png" },
        { url: "../Assets/Icons/email.png" },
        { url: "../Assets/Icons/skills.png" },
      ];
    if (projectType === "web") {
        return (
            <div>
                <h1>MY WEB PROJECTS</h1>
                <Container className="WebContainer">
                    <h1>MY WEB PROJECTS</h1>
                </Container>
               
            </div>
        )
    }

    else if (projectType === "iOS") {
        return (
            <div>
                <Container className="ProjectsContainer">
                    <Row>
                        <h1 className="ProjectTitle">ScreenBreak</h1>
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
                            <h3 className="ProjectText">ScreenBreak offers advanced Screen Time restrictions and monitoring</h3>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        )
    }

    else if (projectType === "android") {
        return (
            <div>
                <h1>MY ANDROID PROJECTS</h1>
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