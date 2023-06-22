import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment} from "@react-three/drei";
import { Suspense } from "react";
import { StarModel } from "../Assets/Models/Star";
import { useState } from "react";
import skills from "../Assets/Icons/skills.png"


export default function Skills() {
    const [skillMessage, setSkillMessage] = useState("JAVA [2016]");
    const [curSkill, setCurSkill] = useState(0);
    console.log(curSkill)
    return (
        <div>
            <Container id="Skills">
                <Row>
                <Col className="SkillContainer1">
                    <Canvas  camera={{fov: 20}}>
                        {/* <ambientLight intensity={.7} /> */}
                        <Suspense fallback={null}>
                        <StarModel  className="FadeModel"/>
                        <sphereGeometry />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                    <h2 className="SkillMessage">{skillMessage}</h2>
                </Col>
                <Col className="SkillContainer2">
                    <Row className="justify-content-center"> 
                        <img className="SkillsHeader" src={skills} alt="Skills"/>
                    </Row>
                    <Row className="justify-content-center">
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item><h4 className={curSkill === 0 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("JAVA [2016]"); setCurSkill(0);}}>JAVA</h4></Grid>
                            <Grid item><h4 className={curSkill === 1 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("UIKIT [2022]"); setCurSkill(1);}}>UIKIT</h4></Grid>
                            <Grid item><h4 className={curSkill === 2 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("SWIFTUI [2023]"); setCurSkill(2);}}>SWIFTUI</h4></Grid>
                            <Grid item><h4 className={curSkill === 3 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("PYTHON [2019]"); setCurSkill(3);}}>PYTHON</h4></Grid>
                            <Grid item><h4 className={curSkill === 4 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("KOTLIN [2022]"); setCurSkill(4);}}>KOTLIN</h4></Grid>
                            <Grid item><h4 className={curSkill === 5 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("C [2020]"); setCurSkill(5);}}>C</h4></Grid>
                            <Grid item><h4 className={curSkill === 6 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("JS [2022]"); setCurSkill(6);}}>JAVASCRIPT</h4></Grid>
                            <Grid item><h4 className={curSkill === 7 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("AWS [2021]"); setCurSkill(7);}}>AWS</h4></Grid>
                            <Grid item><h4 className={curSkill === 8 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("REACTJS [2022]"); setCurSkill(8);}}>REACTJS</h4></Grid>   
                            <Grid item><h4 className={curSkill === 9 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("C++ [2020]"); setCurSkill(9);}}>C++</h4></Grid>      
                            <Grid item><h4 className={curSkill === 10 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("HTML [2021]"); setCurSkill(9);}}>HTML++</h4></Grid>   
                            <Grid item><h4 className={curSkill === 11 ? "SelectedSkill" : "Skill"} onClick={() => {setSkillMessage("CSS [2021]"); setCurSkill(9);}}>CSS</h4></Grid>                      
                        </Grid>
                    </Row>
                </Col>
                </Row>
            </Container>
        </div>
    );
}