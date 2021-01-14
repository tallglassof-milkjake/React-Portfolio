import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../styles/Header.css";

function Header() {
    return (
        <header className="masthead mb-auto">
            <div className="inner">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <h3 className="masthead-brand head-jake text-light">Jake Mackinlay</h3>
                    </Link>
                
                    <nav className="nav nav-masthead justify-content-center">
                        <Link to="/about" style={{textDecoration: "none"}}>
                            <a className="nav-link active cover-link" href="about.html">About</a>
                        </Link>
                        <Link to="/portfolio" style={{textDecoration: "none"}}>
                            <a className="nav-link cover-link" href="portfolio.html">Portfolio</a>
                        </Link>
                        <Link to="contact" style={{textDecoration: "none"}}>
                            <a className="nav-link cover-link" href="contact.html">Contact</a>
                        </Link>
                    </nav>
            </div>
        </header>
    )
}

export default Header;