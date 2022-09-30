import React from "react";
import logo from "./images/logoreactfacts.png";

export default function Header() {
    return (
        <header id="header">
            <nav id="nav">
                <a href="https://www.w3schools.com/tags/tag_a.asp" rel="noreferrer" target="_blank">
                    <img src={ logo } alt="React-Logo" className="nav--icon"/>
                </a>
                <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}