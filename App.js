import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            <img
               className="logo"
               src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-pin-food-delivery-map-location-delivery-logo-concept-png-image_5137624.jpg"
               alt="logo"
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
}

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);