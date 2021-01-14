import React from "react";
import "../../../../styles/CardLayout.css";
import Image from "./Image";

function CardLayout() {
    return (
        <div className="card border-dark">
            <div className="row projectCard">
                <div className="col-5">
                    <Image />
                </div>
                <div className="col-7">
                    <h4 className="card-title cardHeading">Card Title</h4>
                    <p className="card-text cardText">Spicy jalapeno spare ribs ham ham hock boudin pig, bacon cupim turducken filet 
                        mignon ground round. Meatball boudin chicken bresaola, pork loin venison strip 
                        steak leberkas. Landjaeger tail pancetta short loin short ribs filet mignon ham 
                        prosciutto strip steak chislic jerky tri-tip kevin leberkas. Bacon salami buffalo, 
                        leberkas tenderloin drumstick beef ground round alcatra venison meatloaf 
                        shoulder ribeye. Meatloaf fatback alcatra sausage tri-tip. Short loin meatball 
                        fatback jerky.
                    </p>
                    <button className="btn btn-lg btn-outline-light mt-5 big-button mb-md-5">
                        Learn More
                    </button>
                </div>

            </div>
            {/* <a className="fastApp" href="faster" target="blank">
                <h3 className="display-4 portfoilioDescriptor">Fasting App</h3>
                <p className="lead portfoilioDescriptor">For this project we created a fasting tracker with a basic BMI calculator 
                    and a calorie counter.
                </p>
            </a> */}
        </div>
        
    )
}

export default CardLayout;