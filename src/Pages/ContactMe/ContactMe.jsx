import React from "react";
import "../SidePanel/SidePanel.css";
import "./ContactMe.css";
import LinkedinLogo from "../../assets/LI-In-Bug.png"
import githubLogo from "../../assets/GitHub_Logo.png";
import gmaillogo from "./icons8-gmail-240.png";
export default function ContactMe() {
    return (
        <div>
            {/*<div style={ { backgroundImage: `url(${bgPhoto})`}}>*/}

            {/*<div className="main-page">*/}
                {/*<SidePanel />*/}
                <div className="contactMe" >
                <p>Feel free to contact me regarding any exciting projects or work opportunities.</p>
                {/*    <h2> Connect with me on Linkedin below!</h2>*/}
                {/*<p>Email: bmanaswini21@gmail.com</p>*/}
                {/*    <p>Phone: +1 7167309398</p>*/}
                    <a href="https://www.linkedin.com/in/manaswinib/">
                    <img src={LinkedinLogo} alt="linkedin-logo" height='70px' width="65px"/>
                    </a>
                    {'  '}
                    <a href="https://github.com/manaswini0">
                        <img src={githubLogo} alt="linkedin-logo" height='50px' width="100px"/>
                    </a>
                    {'  '}
                    <a href="mailto:bmanaswini21@gmail.com">
                        <img src={gmaillogo} alt="linkedin-logo" height='70px' width="65px"/>
                    </a>
                {/*</div>*/}

            </div>
            {/*</div>*/}
        </div>
    );
}