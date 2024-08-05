import React, {useEffect, useState} from "react";
import MainPage from "./Pages/MainPage/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WorkExperience from "./Pages/WorkExperience/WorkExperience";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Helmet from "react-helmet";
import AboutMe from "./Pages/AboutMe/AboutMe";


const App = () => {


      const [scrollY, setScrollY] = useState(0);

      useEffect(() => {
          const handleScroll = () => {
              setScrollY(window.scrollY);
          };

          window.addEventListener('scroll', handleScroll);

          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, []);

      const getGradient = () => {
          const startColor = { r: 255, g: 255, b: 255 }; // White
          const endColor = { r: 0, g: 0, b: 0 }; // Black

          const scrollFactor = scrollY / (document.body.scrollHeight - window.innerHeight);

          const r = startColor.r + (endColor.r - startColor.r) * scrollFactor;
          const g = startColor.g + (endColor.g - startColor.g) * scrollFactor;
          const b = startColor.b + (endColor.b - startColor.b) * scrollFactor;

          return `rgb(${r}, ${g}, ${b})`;
      };

      return (
        <div>
            {/*<div className="App" style={{ background: `linear-gradient(${getGradient()}, #71a5de)` }}>*/}
            <Helmet bodyAttributes={{style: 'background-color : white'}}/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<MainPage /> }/>
                    <Route path="/about"  element={<section id = "about"><AboutMe /></section>} />
            {/*        <Route path="/resume"  element={<Resume />} />*/}
                    <Route path="/workexperience"  element={ <section id = "workexperience"> <WorkExperience /></section>} />
            {/*        <Route path="/projects"  element={<Projects />} />*/}
                    <Route path="/contact"  element={ <section id = "contact">   <ContactMe/></section>
                    } />

            {/*    <SidePanel />*/}
                </Routes>
            </BrowserRouter>
            <section id = "mainpage"><MainPage /></section>
            <section id = "about"><AboutMe /></section>
            <section id = "workexperience"> <WorkExperience /></section>
            <section id = "contact">   <ContactMe/></section>




        </div>
        // </div>
    );
}
// // App.js
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import TopNavBar from "./Pages/TopNavBar/TopNavBar";
//
// const App = () => {
//     const [scrollY, setScrollY] = useState(0);
//
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrollY(window.scrollY);
//         };
//
//         window.addEventListener('scroll', handleScroll);
//
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     const getGradient = () => {
//         const startColor = { r: 255, g: 255, b: 255 }; // White
//         const endColor = { r: 0, g: 0, b: 0 }; // Black
//
//         const scrollFactor = scrollY / (document.body.scrollHeight - window.innerHeight);
//
//         const r = startColor.r + (endColor.r - startColor.r) * scrollFactor;
//         const g = startColor.g + (endColor.g - startColor.g) * scrollFactor;
//         const b = startColor.b + (endColor.b - startColor.b) * scrollFactor;
//
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//
//     return (
//         <div className="App" style={{ background: `linear-gradient(${getGradient()}, white)` }}>
//             <TopNavBar />
//             <section id="home">
//                 <h1>Home</h1>
//                 <p>Welcome to the home page.</p>
//             </section>
//             <section id="about">
//                 <h1>About</h1>
//                 <p>About us section.</p>
//             </section>
//             <section id="services">
//                 <h1>Services</h1>
//                 <p>Services we offer.</p>
//             </section>
//             <section id="contact">
//                 <h1>Contact</h1>
//                 <p>Contact us here.</p>
//             </section>
//         </div>
//     );
// };
//
export default App;