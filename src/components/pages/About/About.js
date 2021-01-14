import React from "react";
import AboutWrapper from "./components/AboutWrapper";
import NewImg from "./components/NewImg";
import "../../../styles/About.css";

function About() {
    return (
        <div className="main-container">
            <div className="row pt-5">
                <NewImg />
                <div className="col-lg-8 pr-4 text-left its-about-me">
                    <AboutWrapper />
                </div>
            </div>

        </div>
    )
}

export default About;