
import React, { useEffect, useState } from 'react'
import './Timer.css';



const TimeBar = () => {
    const [seconds, setSeconds] = useState("00:00");
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
      if (isActive) {          
          let firstNum = seconds[0]
          let secNum = seconds[1]
          let thirdNum = seconds[3]
          let fourthNum = seconds[4]
          fourthNum = Number(fourthNum)+1

          setTimeout(()=>{
            if(Number(firstNum) === 6) {
              window.alert('Time is up!')
              setIsActive(false)
              fourthNum = '0'
            } else if(Number(secNum) === 9 && Number(thirdNum) > 4 && Number(fourthNum) > 9) {
              firstNum = Number(firstNum) + 1
              secNum = '0'
              thirdNum = '0'
              fourthNum = '0'
            } else if(Number(thirdNum) > 4 && Number(fourthNum) > 9) {
              fourthNum = '0'
              thirdNum = '0'
              secNum = Number(secNum) + 1
            } else if(fourthNum > 9) {
              fourthNum = '0'
              thirdNum = Number(thirdNum) + 1
            } 
            setSeconds(`${firstNum+secNum}:${thirdNum+fourthNum}`)
            
        }, 1000)
          
        }
    }, [ seconds ])
  
    return (
      <div className="app">
        <div className="time">
          {seconds}
        </div>
        <div className="row">
          {/* <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {isActive ? 'Pause' : 'Start'}
          </button> */}
          {/* <button className="button" onClick={reset}>
            Reset
          </button> */}
        </div>
      </div>
    );
  };
  
  export default TimeBar;