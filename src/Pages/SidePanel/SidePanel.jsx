import React from "react";
import "./SidePanel.css";
import {Link} from "react-router-dom";

export default function SidePanel() {
    const listItems = [ "About", "Resume", "Work Experience", "Projects", "Contact Me"];
    // const listItemClicked = (){
    //
    // }

    let listItemsElements = listItems.map(function(item) {
        return (
            <Link to={`/${item.replace(/ /g, '')}`} style={{ textDecoration: 'none' }}>
                <span className="list">
                < ul className="list-unclicked">{item}</ul>
                </span>
            </Link>
        );
    });
    return (
        <div>
            <div className="side-panel">
                <div className="list">
                    {listItemsElements}
                </div>
            </div>
        </div>
    );
}