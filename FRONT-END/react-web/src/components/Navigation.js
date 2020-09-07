import React from 'react';
import logo from '../logo.png';
import { NavLink } from "react-router-dom";
const Navigation = () =>(  
        <nav className="main-nav">
        <a href="/"><img src={logo} alt={logo} /></a>
          <ul className="main-menu">
            <li><NavLink to="/"><a href="#">Home</a></NavLink></li>
            <li><NavLink to="/signin"><a href="#">Sign In</a></NavLink></li>
            <li><NavLink to="/events"><a href="#">Events</a></NavLink></li>
            <li><NavLink to="/bookings"><a href="#">Bookings</a></NavLink></li>
          </ul>
        </nav>
)
export default Navigation;