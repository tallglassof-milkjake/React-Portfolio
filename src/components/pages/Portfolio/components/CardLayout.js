import React, { Component } from "react";
import CardData from "./CardData";
import "../../../../styles/CardLayout.css";
import Veg from "./images/FreshVeg.jpg";
import Fast from "./images/watchMockFull.jpg";
import Budget from "./images/BudgetTracker.jpg";
import Workout from "./images/stats.jpg";
import Directory from "./images/directory.jpg";
import Burger from "./images/burgers.jpg";

function CardLayout() {
    const projects = [
        {
          name: "Veg",
          image: `${Veg}`,
          title: "Fresh Veg",
          text: ""
        },
        {
          name: "Fast",
          image: `${Fast}`,
          title: "Fasting Tracker",
          text: ""
        },
        {
          name: "Budget",
          image: `${Budget}`,
          title: "Budget Tracker",
          text: ""
        },
        {
          name: "Workout",
          image: `${Workout}`,
          title: "Workout Tracker",
          text: ""
        },
        {
          name: "Directory",
          image: `${Directory}`,
          title: "Employee Directory",
          text: ""
        },
        {
          name: "Burger",
          image: `${Burger}`,
          title: "Eat The Burger",
          text: ""
        }
      ]

      
        return (
            <>
                <CardData 
                    projects={projects}
                />
                <br />
            </>
        )
      
}

export default CardLayout;