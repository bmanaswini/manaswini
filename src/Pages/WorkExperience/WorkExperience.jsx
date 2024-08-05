import React from "react";
import "./WorkExperience.css";
import Card from 'react-bootstrap/Card';
import reactlogo from "../../assets/react-logo.png";
import dockerlogo from "../../assets/docker-logo-blue.png";
import sqllogo from "../../assets/logo-mysql.png"
import javalogo from "../../assets/java-logo.png";
import pythonlogo from "./python-logo.png";

export default function WorkExperience() {
    return (
        <div className="main-page">
                <div className="work-exp-card">
                    <h2>Work Experience</h2>

                    <Card className="card">
                        <Card.Body>
                            <a href="https://www.constantcontact.com/features/email-tracking-software" style={{ textDecoration: 'none', color: 'black'}}>

                            <Card.Title className="cardHeading">Constant Contact</Card.Title>
                            <Card.Subtitle> July 2022 - Present </Card.Subtitle>
                            <Card.Text>
                                I have 2+ years of full stack software engineer at constant contact in reporting team. My work at constant contact primarily included dealing with customers reporting data for their email marketing campaigns. My work was in React in frontend and Java backend.
                                I was a key engineer in the redesign of the reporting dashboard enhancing in frontend user experience.
                            </Card.Text>
                            </a>

                            <br/>
                            <br/>
                            <br/>
                            <Card.Title className="cardHeading"> Tech stack I have worked with</Card.Title>
                            <img className='logo' src={dockerlogo} alt="docker-logo"/>
                            <img className='logo' src={reactlogo}  alt="react-logo"/>
                            <img className='logo' src={javalogo}  alt="java-logo"/>
                            <img className='logo' src={sqllogo} alt="sql-logo"/>
                            <img className='logo' src={pythonlogo} alt="sql-logo"/>

                        </Card.Body>
                    </Card>
                    {/*<Card className="card">*/}
                    {/*    <Card.Body>*/}
                    {/*        <Card.Title className="cardHeading"> Tech stack I have worked with</Card.Title>*/}
                    {/*        /!*<Card.Subtitle> July 2022 - Present</Card.Subtitle>*!/*/}
                    {/*        /!*<Card.Text>*!/*/}
                    {/*        /!*    I have 2+ years of full stack software engineer at constant contact in reporting team. My work at constant contact primarily included dealing with customers reporting data for their email marketing campaigns. My work was in React in frontend and Java backend.*!/*/}
                    {/*        /!*    I was a key engineer in the redesign of the reporting dashboard enhancing in frontend user experience.*!/*/}
                    {/*        /!*</Card.Text>*!/*/}
                    {/*        <img src={dockerlogo} height="10%" width="10%" alt="docker-logo"/>*/}
                    {/*        <img src={reactlogo} height="10%" width="10%" alt="react-logo"/>*/}
                    {/*        <img src={javalogo} height="10%" width="10%" alt="java-logo"/>*/}
                    {/*        <img src={sqllogo} height="10%" width="10%" alt="sql-logo"/>*/}
                    {/*    </Card.Body>*/}
                    {/*</Card>*/}
                </div>
        </div>
    );
}