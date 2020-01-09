import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import CelebCard from './CelebCard'
import Timebar from './Timebar'
import  styles from "styled-components";
import Button from './Button'

const Buttons = styles.button`
padding: .6rem 1.5rem;
margin: .4rem;
border-radius: 3px;
text-transform: uppercase;
font-weight: 600;
font-size: .8rem;
border-style: groove;
`


const GameScreen = () => {
    const randomID = () => {
        return Math.floor(Math.random() * 300 + 1)
    }
    const[isReady, setisReady]=useState(false)

    //This fetches the list of celebs
    const [data, setData] = useState([])
    //This works with SetCurrentCard to identify the current ID needed to be passed
    //const [id, setId] = useState(Math.floor(Math.random() * 300 + 1))
    const [index, setIndex] = useState(0);
    //Keeps track of Score and resets to zero after game ends.
    const [score, setScore] = useState(0)
    const [guesses, setGuesses] = useState(0)
    //sets the state of the timer
    const [time, setTime] = useState(30)
    const [wrongDead, setWrongDead] = useState(false)
    const [wrongAlive, setWrongAlive] = useState(false)
    const [isLast, setisLast]=useState(false)
  console.log(index)
  console.log(isLast)
    useEffect(() => {
        axios
            .get(
                `https://celebs-back-end.herokuapp.com/api/celebs`
            )
            .then((e) => {
                e.status ? setData(e.data) : console.log("This shouldn't show up")
            })
            .catch((err) => {
                console.log('Something isnt working', err)
                //setId(randomID())
            })
    }, [isLast]);

    // useEffect(() => {
    //     if (!time) return;
    //     const timer = setInterval(() => setTime(time - 1), 1000)
    //     return () => clearTimeout(timer)
    // }, [time]);

    //Checks for death case on Click
    const isDead = (deathCheck) => {
        if (deathCheck) {
            //true case, reward one point
            setScore(score + 1)
            setWrongDead(false)
        } else {
            setWrongDead(true)
        }
        //Move to next card
        setIndex(index + 1)
        setGuesses(guesses + 1)
    }

    //Checks for Alive case on Click
    const isAlive = (aliveCheck) => {
        if (!aliveCheck) {
            //true case, reward one point
            setScore(score + 1)
            setWrongAlive(false)
        } else {
            setWrongAlive(true)
        }
        //move to next card
        setIndex(index + 1)
        setGuesses(guesses + 1)
    }

    
    const person = data[index];
    if (!isReady ){
        return (
            <div>
                <h2>Are you ready to Play?</h2>
                <button onClick={()=>setisReady(true)}>Play</button>
            </div>

        )
    }
    else if (isLast){
        return(
            // display scoreboard here
            <div> <h2>Please SignUp/ Login to against your Friends!!!!</h2>
            <Button type='submit' buttonText={'SIGNUP'} pathName={'signup'} />
            <button onClick = {()=>{setisLast(false) ; setisReady(false);setIndex(0)}}> Play Again</button>            
            </div>
                     
        )
       
    }
    return (
        <div className='play-screen'>

           
                      <div className='play-content'>
                        <div className='score-status'>
                            <h3>Guesses:&nbsp;&nbsp; {guesses}</h3>
                            <h3>Correct Guesses:&nbsp;&nbsp; {score}</h3>
                        </div>
                        <Timebar />
                        <div>
                            {person && <CelebCard data={person} />}
                        </div>


                        <Buttons
                            onClick={index===19?()=>setisLast(true) :() => isDead(person.death)}
                            className={wrongDead ? 'wrong' : ''}
                        >
                            Dead
              </Buttons>
                        <Buttons
                            onClick={index===19?()=>setisLast(true) : () => isAlive(person.death)}
                            className={wrongAlive ? 'wrong' : ''}
                        >
                            Alive
              </Buttons>
                    </div>
                
        </div>
    )
}

export default GameScreen