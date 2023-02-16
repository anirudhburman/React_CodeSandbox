//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

var customStyles = {
  color: "red"
};

var heading = null;

const currentHour = new Date().getHours();

if (currentHour > 12 && currentHour < 18) {
  heading = "Good Afternoon";
  customStyles.color = "green";
} else if (currentHour > 18) {
  heading = "Good Evening";
  customStyles.color = "blue";
} else {
  heading = "Good Morning";
}

ReactDOM.render(
  <h1 id="heading" className="heading" style={customStyles}>
    {heading}
  </h1>,
  document.getElementById("root")
);
