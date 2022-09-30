import React from "react";
import logo from "./logoreactfacts.png";

export default function Header() {
    return (
        <header id="header">
            <nav id="nav">
                <a href="https://www.w3schools.com/tags/tag_a.asp" rel="noreferrer" target="_blank">
                    <img src={ logo } alt="React-Logo" id="react-logo"/>
                </a>
                <p className="list-items" id="HeaderReactCourse">React Course - Project 1</p>
            </nav>
        </header>
    )
}