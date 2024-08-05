// import React from "react";
// import {Link} from "react-router-dom";
// import myPhoto from "../MainPage/myphoto.png";
// import "./TopNavBar.css";
//
// export default function TopNavBar() {
//     const listItems = [ "About", "Resume", "Work Experience", "Projects", "Contact Me"];
//     // const listItemClicked = (){
//     //
//     // }
//
//     let listItemsElements = listItems.map(function(item) {
//         return (
//             <Link to={`/${item.replace(/ /g, '')}`} style={{ textDecoration: 'none' }}>
//                 <span className>
//                     {item}
//                 </span>
//             </Link>
//         );
//     });
//     return (
//         <div>
//             <div className="sticky-nav">
//             <div className="list-elements-nav">
//                 {listItemsElements}
//             </div>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import './TopNavBar.css';

const TopNavBar = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <ul>
                <a href="/" style={{ textDecoration: 'none' }}><h3>Manaswini</h3></a>

                <li><a href="/#about">About</a></li>
                <li><a href="/#workexperience">Work Experience</a></li>
                <li><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default TopNavBar;