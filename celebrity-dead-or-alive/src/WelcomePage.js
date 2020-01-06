import React from "react";
import  styles from "styled-components";
// import {Link} from "react-router-dom";

const Img = styles.img`

margin-top: 10%;`

const Page = styles.section`
display:flex;
justify-content:center;
font-size:26px;
font-family: 'Cinzel', serif;`



const Buttons = styles.button`
margin-right:30%;
margin-left:30%;
background-color:#cdcdcd;
color:black;
font-size: 36px;
border-radius: 12px;
border:none;
font-family: 'Cinzel', serif;

`


export default function WelcomePage() {
    return (
      <Page className="welcome-page">
        
           
        <header>
          <h1>The Ultimate Dead or Alive Quiz</h1>
          
          <Img
            className="main-img"
            src="https://files.slack.com/files-pri/T4JUEB3ME-FRV9DJYKE/logomakr_7q6qud.png"
            alt="rick"
          />
          {/* <Link to=""><Buttons>Play Now
          </Buttons></Link> */}
         
        </header>
    
      </Page>
    );
  }