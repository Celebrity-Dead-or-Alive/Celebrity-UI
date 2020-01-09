import React from 'react'
import { Link } from 'react-router-dom'
import  styles from "styled-components";


const buttonS = styles.img`
margin-top: 10%;`


const Button = (props) => {
  let text = props.buttonText
  let path = props.pathName

  return (
    <Link to={`/${path}`}>
      <button type={props.type}>{text}</button>
    </Link>
  )
}
export default Button
