import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom'



export default function NavBar() {
    return (
<nav id="page-nav">
  
      <label for="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>

   
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/startscreen">Quiz</Link></li>
        
        
      
      </ul>
    </nav>

    );}

