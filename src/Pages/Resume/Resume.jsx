import React from "react";
import "../MainPage/MainPage.css";
import Helmet from 'react-helmet';
import resume from './resume.png'


export default class Resume extends React.Component {
    render() {

        return (
            <div className="main-page">
                <Helmet bodyAttributes={{style: 'background-color : #fefae0'}}/>
                {/*<SidePanel />*/}
                <div className="resume">
                <img src={resume} alt="resume"/>
                </div>
            </div>
        );
    }
}