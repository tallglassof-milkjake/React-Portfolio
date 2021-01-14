import React from "react";

import "../styles/Footer.css";

function Footer() {
    // const copy = [%raw {|'\u00a9'|}];

    return (
        <footer className="mastfoot mt-auto mt-sm-5">
          <div className="inner">
            <a className="text-decoration-none pl-2 pr-2" href="https://www.facebook.com/profile.php?id=100009225831081" target="blank">
              <span className="facebook">
                <i className="fab fa-facebook"></i>               
              </span>
            </a>
            <a className="text-decoration-none pl-2 pr-2" href="https://github.com/tallglassof-milkjake" target="blank">
              <span className="github">
                <i className="fab fa-github"></i>         
              </span>
            </a>
            <a className="text-decoration-none pl-2 pr-2" href="https://www.linkedin.com/in/jake-mackinlay-1a5865157/" target="blank">                
              <span className="linkedin">
                <i className="fab fa-linkedin"></i>       
              </span>
            </a>
            <p>Copyright © copy Jake Mackinlay 2020</p>
          </div>
        </footer>
    )
}

export default Footer;