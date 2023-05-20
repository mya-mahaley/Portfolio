import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF} from "@react-three/drei";
import { CloudModel } from "../Assets/Models/Cloud";
import { Suspense } from "react";
import name from "../Assets/Icons/name.png"
import skills from "../Assets/Icons/skills.png"

export default function Home() {
    const [skillMessage, setSkillMessage] = useState("SELECT A SKILL");

    return (
        <div>
            <Container className="WebContainer">
            <Row className="justify-content-center">
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item><h4 className="Skill" >SKILLS</h4></Grid>
                            <Grid item><h4 className="Skill" >ABOUT ME</h4></Grid>
                            <Grid item><h4 className="Skill" >PROJECTS</h4></Grid>
                            <Grid item><h4 className="Skill" >EXPERIENCE</h4></Grid>
                            <Grid item><h4 className="Skill" >CONTACT</h4></Grid>
                            <Grid item><h4 className="Skill" >RESUME</h4></Grid>                      
                        </Grid>
                    </Row>
                <Row>
                    <Col>
                        <h3 className="PaddedText">I AM A SOFTWARE DEVELOPER AND DESIGNER BASED IN TEXAS. I RECENTLY
                            GRADUATED FROM THE UNIVERSITY OF TEXAS AT AUSTIN, WITH A BACHELOR'S
                            DEGREE IN COMPUTER SCIENCE.
                        </h3>

                    </Col>
                </Row>
            </Container>
            <img className="NameHeader" src={name}/>
            <Container>
                <Row>
                <Col className="SkillContainer1">
                    <Canvas className="Moon" camera={{fov: 40}}>
                        <ambientLight intensity={.7} />
                        <Suspense fallback={null}>
                        <CloudModel  className="FadeModel"/>
                        <sphereGeometry />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                    <h2 className="SkillMessage">{skillMessage}</h2>
                </Col>
                <Col className="SkillContainer2">
                    <Row className="justify-content-center"> 
                        <img className="SkillsHeader" src={skills}/>
                    </Row>
                    <Row className="justify-content-center">
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("JAVA [2016]")}>JAVA</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("UIKIT [2022]")}>UIKIT</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("SWIFTUI [2023]")}>SWIFTUI</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("PYTHON [2019]")}>PYTHON</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("KOTLIN [2022]")}>KOTLIN</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("C [2020]")}>C</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("JS [2022]")}>JAVASCRIPT</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("AWS [2021]")}>AWS</h4></Grid>
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("REACTJS [2022]")}>REACTJS</h4></Grid>   
                            <Grid item><h4 className="Skill" onClick={() => setSkillMessage("C++ [2020]")}>C++</h4></Grid>                         
                        </Grid>
                    </Row>
                </Col>
                </Row>
            </Container>
        </div>
    );
}