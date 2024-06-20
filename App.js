import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
   <h1 className="head" tabIndex="5">
     Namaste React using JSX
   </h1>
);

// Component composition
const Heading = () => {
   return (
      <div>
         <Title />
         <h1>Namaste React Functional Component</h1>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);