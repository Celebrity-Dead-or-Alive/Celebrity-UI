import React from "react";
import  styles from "styled-components";


const Img2 = styles.img`
display:flex;
flex-direction:column;
margin:0 auto;`

const Page = styles.section`
 display:flex;
 justify-content:center;
font-size:40px;
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
const Vampire = styles.h1`
color:silver;
text-shadow:
4px 4px 1px #300000,
4px 6px 1px #400000,
4px 8px 1px #500000,
4px 10px 1px #600000,
4px 12px 1px #700000,
4px 14px 1px #800000,
4px 16px 1px #900000,
4px 18px 1px #A00000,
4px 20px 1px #B00000,
4px 22px 1px #C00000,
4px 24px 1px #D00000,
4px 26px 1px #E00000,
4px 28px 1px #F00000,
4px 30px 1px #FA0000,
4px 32px 1px #FB0000,
4px 34px 1px #FC0000,
4px 36px 1px #FD0000,
4px 38px 1px #FE0000,
4px 40px 2px #FF0000;`



export default function WelcomePage() {
    return (
      <Page className="welcome-page">
        
           
        <header>
          <Vampire className= "blood">The Ultimate Dead or Alive Quiz</Vampire>
         
           <Img2
            className="main-img"
            src="https://st.depositphotos.com/1292351/2335/v/450/depositphotos_23359312-stock-illustration-cartoon-illustration-of-cute-green.jpg"
            alt="zombie"
          />
          
         
        </header>
    
      </Page>
    );
  }