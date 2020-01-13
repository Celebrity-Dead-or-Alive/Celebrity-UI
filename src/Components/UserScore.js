import React from 'react'
import Button from './Button'


return (
    <div className='userscores-screen'>
      <header className='userscores-content'>
        <h1>HALL OF FAME</h1>
        <div className='grid-titles'>
        <h2>RANK</h2>
        <h2>SCORE</h2>
        <h2>DATE</h2>
        </div>
       
      
        <h4>Play again to beat your own high score!</h4>
        <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
      </header>
    </div>
  )


export default UserScores
