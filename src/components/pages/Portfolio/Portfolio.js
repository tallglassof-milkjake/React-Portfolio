import React, { Component } from "react";

import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

import "../../../styles/Portfolio.css";

class Portfolio extends Component {

    render() {
        return (
            <div>
                <Header />
                <ProjectCard />
            </div>
        )
    }
}

export default Portfolio;