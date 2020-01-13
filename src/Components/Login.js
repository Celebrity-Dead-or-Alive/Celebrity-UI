import React, { useState } from 'react'
import Button from './Button'
import  styles from "styled-components";

const Page = styles.section`
 font-size:30px;
 margin-top:5%;
`
const Img2 = styles.img`
display:flex;
flex-direction:column;
margin:0 auto;`


const LoginScreen = () => {
  const [loginCred, setloginCred] = useState({ email: '', password: '' })

  const handleChange = (e) => {

    setloginCred({ ...loginCred, [e.target.name]: e.target.value })
  }

  window.localStorage.setItem("LoginCred", JSON.stringify(loginCred))

  return (
    <Page className='login-screen'>
      <form>
        <label htmlFor='email'>
          Email:
          <input
            placeholder='email'
            value={loginCred.email}
            name='email'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Password:
        <input
            type='password'
            placeholder='password'
            value={loginCred.password}
            name='password'
            onChange={handleChange}
          />
        </label>
        <div className='buttons'>
          <Button type='submit' buttonText={'SUBMIT'} pathName={''} />
          <Button type='submit' buttonText={'SIGNUP'} pathName={'signup'} />
          <Img2
            className="main-img"
            src="https://st.depositphotos.com/1292351/2335/v/450/depositphotos_23359312-stock-illustration-cartoon-illustration-of-cute-green.jpg"
            alt="zombie"
          />
        </div>
      </form>
    </Page>
  )
}

export default LoginScreen
