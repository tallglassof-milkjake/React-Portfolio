import React from "react";
import "../../../../styles/Contact.css";

function Text() {
    return (
        <div className="row contactInfo">
            <div className="col-7">
                <p className="text-light text-left">Feel free to drop me a line or shoot through an email direct and start the conversation. Otherwise if you just have a quick inquiry fill out the form below!</p>
                <p className="text-light text-left">Hope to hear from you soon!</p>
            </div>
            <div className="col-1">
                <div className="divider"></div>
            </div>
            <div className="col-4">
                <p className="text-light contact text-left"><b>jrmackinlay90@gmail.com</b></p>
                <p className="text-light contact text-left"><b>0423 203 792</b></p>
            </div>
        </div>
    )
}

export default Text;