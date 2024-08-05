import React from "react";
import Card from "react-bootstrap/Card";
import "./AboutMe.css";
import ublogo from "./101-UB-Primary-RGB-Blue.png";

export default function AboutMe() {
    return (
        <div>
            <div className="main-page">
                <div className="work-exp-card">
                    <h2>About Me</h2>

                    <Card className="card">
                        <Card.Body>
                            {/*<Card.Title className="cardHeading">About Me</Card.Title>*/}
                            <Card.Text>
                                Hello! My name is Manaswini. Welcome to my space! I am a software engineer with interest in frontend. I graduated from State University of New York at Buffalo (SUNY Buffalo) in 2022.
                                I have passion to solve problems with the most creative and simple manner. Sometimes big problems needs simple solutions. Apart from coding, I am an amateur dancer and dance to express and de stress myself.
                            </Card.Text>
                            <br/>
                            <a href="https://www.buffalo.edu/">
                            <img src={ublogo} height="30%" width="30%" alt="react-logo"/>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}