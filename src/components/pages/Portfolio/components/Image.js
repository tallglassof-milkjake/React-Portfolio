import React from "react";
import Piccy from "../../../../images/FreshVeg.jpg";

function Image() {
    return (
        <div className="row imgRow align-items-center">
            <div className="col">
                <img className="img-fluid piccy" src={Piccy} />
            </div>
        </div>
    )
}

export default Image;