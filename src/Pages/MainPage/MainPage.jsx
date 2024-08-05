import React from "react";
import "./MainPage.css";
import myPhoto from './myphoto.png';
import { ReactTyped } from "react-typed";

import TopNavBar from "../TopNavBar/TopNavBar";
export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <div className="main-page">
                {/*<Helmet bodyAttributes={{style: 'background-color : #fefae0'}}/>*/}
                {/*<SidePanel />*/}

                    <div className="name">
                        <img className = "myPhoto" src={myPhoto} alt = "photo"/>
                        <h5>Hey! I am</h5>
                        <h2>Manaswini Burugupalli</h2>
                        <div className="subName">
                            <h4>I'm a {" "}
                            <ReactTyped strings={["Software Engineer"]} typeSpeed={100} loop />
                        </h4>
                        </div>
                        <br />
                        <br />
                        <div className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                             className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                        </svg>
                        </div>
                    </div>



            </div>
            </div>
        );
    }
}