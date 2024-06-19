import React from "react";
import ReactDOM from "react-dom/client";

// creating React element with React.createElement()
const heading = React.createElement(
   "h1",
   { id: "heading" },
   "Namaste React"
);

// creating React element with JSX
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);