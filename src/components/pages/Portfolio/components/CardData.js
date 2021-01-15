import React from "react";

function CardData(props) {

    return (
        <>
            {props.projects.map(data => (
                <div className="card projCard" style={{width: `${100}%`}}>
                    <img className="card-img-top cardImg" key={data.name} src={data.image}/>
                    <div className="card-body">
                        <h1 className="card-title cardTitle" key={data.name}>{data.title}</h1>
                        <p className="card-text cardText" key={data.name}>{data.text}</p>
                    </div>
                    <div>
                        <button className="btn btn-lg btn-outline-light mt-5 big-button mb-md-5">Learn More</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CardData;