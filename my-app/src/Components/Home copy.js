import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF} from "@react-three/drei";
import { SkullModel } from "../Assets/Models/Skull";
import { MoonModel } from "../Assets/Models/Moon";
import { NeptuneModel } from "../Assets/Models/Neptune";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import FadeIn from "react-fade-in";

export default function Home() {
    return (
        <div>
            <Container>
                <Row>
                <Col>
                    <h2 className="PaddedText">HI, MY NAME IS</h2>
                    <h1 className="Name">MYA MAHALEY</h1>
                    <h3 className="PaddedText">I AM A SOFTWARE DEVELOPER BASED IN TEXAS. I RECENTLY
                        GRADUATED FROM THE UNIVERSITY OF TEXAS AT AUSTIN, WITH A BACHELOR'S
                        DEGREE IN COMPUTER SCIENCE.
                    </h3>
                    
                </Col>
                <Col >
                    <Canvas className="Moon" camera={{fov: 23}}>
                        
                        <Suspense fallback={null}>
                        <MoonModel  className="FadeModel"/>
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls />
                    </Canvas>
                </Col>
                </Row>
            </Container>
            
        </div>
    );
}