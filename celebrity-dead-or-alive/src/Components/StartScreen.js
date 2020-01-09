import React from 'react'
import Button from './Button'
import  styles from "styled-components";


const Img2 = styles.img`
display:flex;
flex-direction:column;
margin:0 auto;`



const StartScreen = () => {
  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  return (
    <div className='start-screen'>
      <header className='start-content'>
        {isNameHere === "" ? null : <h2>Welcome</h2>}
        <h2>
          Have you ever had an argument about whether a celebrity is dead or
          alive?
        </h2>
      </header>
      <div className='buttons'>
        <Button buttonText={'START PLAYING'} pathName={'play'} />
        {isNameHere === "" ? <Button buttonText={'LOGIN'} pathName={'login'} /> : null}
      </div>
      <Img2
            className="main-img"
            src="https://st.depositphotos.com/1292351/2335/v/450/depositphotos_23359312-stock-illustration-cartoon-illustration-of-cute-green.jpg"
            alt="zombie"
          />
    </div>
  )
}

export default StartScreen
