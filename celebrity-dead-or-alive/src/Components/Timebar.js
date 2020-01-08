
import React, { useEffect, useState } from 'react'
import './Timer.css';



const TimeBar = () => {
    const [seconds, setSeconds] = useState("00:00");
    const [isActive, setIsActive] = useState(true);
    // const[toggle, setToggle]=useState(true);


    useEffect(() => {
      let interval = null;
      console.log("useEffect")
      if (isActive) {
          console.log("active");
          
          let firstNum=seconds[0]
          let secNum=seconds[1]
          let thirdNum=seconds[3]
          let fourthNum=seconds[4]
          fourthNum=Number(fourthNum)+1
        if (fourthNum >9){
            fourthNum="0"
            thirdNum=Number(thirdNum)+1
        }
        else if (thirdNum == 5 && fourthNum==0){
            setTimeout(()=>{
                 thirdNum="0"
                 fourthNum="0"
                secNum=Number(secNum + 1) 
            }, 1000)
          
        }
          setTimeout(()=>{
              console.log("running");
            setSeconds(`${firstNum+secNum}:${thirdNum+fourthNum}`)
            // setToggle(!toggle)
        }, 1000)
          
        }
     
    }, [seconds])
  
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