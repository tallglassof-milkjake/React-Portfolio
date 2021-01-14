import React from  "react";
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function HomeBTN() {
    return(
        <p className="lead">
            <Link to="portfolio">
                <button className="btn btn-lg btn-outline-light mt-5 big-button mb-md-5">See my work!</button>
            </Link>
        </p>
    )
}

export default HomeBTN;