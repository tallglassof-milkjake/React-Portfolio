import React from "react";
import ProfileImg from "../../../../images/jake-drummer-Boy.jpg";

function Img() {
    return (
        <div className="col-lg-4 my-face-div pr-4">
            <img className="img-fluid pt-2 pb-4 rounded my-face" alt="Jake on Drums" src={ProfileImg} />
        </div>
    )
}

export default Img;