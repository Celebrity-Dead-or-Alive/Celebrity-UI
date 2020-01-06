import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import WelcomePage from './Components/WelcomePage';
import StartScreen from './Components/StartScreen'


function App() {
  return (
    <div className="App">
       <NavBar />
       
       
      <div className='content'></div>
      <Switch>
          <Route exact path='/' component={WelcomePage} />  
          <Route exact path="/startscreen" component={StartScreen}/>
         
        </Switch> 
   
    </div>
  );
}

export default App;
