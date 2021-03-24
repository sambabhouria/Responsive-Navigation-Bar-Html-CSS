import React, { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


import './nav.css';

export const Navbar = () => {

const [isActive, setActive] = useState("false");

//assigning location variable
const location = useLocation();

//destructuring pathname from location
const { pathname } = location;

//Javascript split method to get the name of the path in array
const splitLocation = pathname.split("/");

console.log("isActive", isActive)
  return (
    <header>
    <a href= "/" className='logo'>Logo</a>
    <div  className={`menu-toggle ${!isActive ? "active" : " "}`} onClick={ () => setActive(!isActive)}></div>
    <nav className={`${!isActive ? "active" : " "}`}>

      {/* <ul>
          <li><NavLink exact activeClassName="active" to='/' >Home</NavLink></li>
          <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
          <li><NavLink activeClassName="active" to='/service/inner'>Service</NavLink></li>
      </ul> */}
      <ul className={`${!isActive ? "active" : " "}`} onClick={ () => setActive(!isActive)}>
          {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
        <li><Link to="/home" className={splitLocation[1] === "" ? "active" : ""}>Home</Link></li>
        <li><Link to="/about" className={splitLocation[1] === "about" ? "active" : ""}>About</Link></li>
        <li><Link to="/services" className={splitLocation[1] === "services" ? "active" : ""}>services</Link></li>
        <li><Link to="/teams" className={splitLocation[1] === "teams" ? "active" : ""}>Teams</Link></li>
        <li><Link to="/portfolio" className={splitLocation[1] === "portfolio" ? "active" : ""}>Portfolio</Link></li>
        <li><Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}>contact</Link></li>
      </ul>
    </nav>
    <div className='clearfix'></div>
  </header>
  )
}
