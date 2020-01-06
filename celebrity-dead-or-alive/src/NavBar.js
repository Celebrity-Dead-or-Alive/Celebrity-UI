import React from "react";
import './NavBar.css';


export default function NavBar() {
    return (
        <nav role="navigation">
        <div id="menuToggle">
         
          <input type="checkbox" />
          
        
          <span></span>
          <span></span>
          <span></span>
          
       
          <ul id="menu">
            <a href="#"><li>Home</li></a>
            <a href="#"><li>Quiz</li></a>
            <a href="#"><li>Login</li></a>
           
           
          </ul>
        </div>
      </nav>

    );}