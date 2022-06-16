import React from "react";
import './Navbar.css';

function Navbar(){
    return <div className="nav">
        <h1>React Meals</h1>
       <div className="options">
         <a>Home</a>
         <a>Order</a>
         <a>Contact Us</a>
       </div>
    </div>
}
export default Navbar