import React from "react";
import HomeBTN from "./HomeBTN";

function HomeMain() {
    return (
        <main role="main" className="inner cover my-main">
            <h1 className="cover-heading display-2 medium-display text-light pt-sm-5 pb-2">Full Stack Developer</h1>
              <p className="lead text-light cover-info">Hi. I'm a Full Stack Developer. If you want to see some of my work, check out my portfolio, or just head over to the contact page and say hello. I am more than happy to have a chat about your next project.</p>
              <HomeBTN />
        </main>
    )
}

export default HomeMain;