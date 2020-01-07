import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import WelcomePage from './Components/WelcomePage';
import StartScreen from './Components/StartScreen'
import Login from './Components/Login'


function App() {
  return (
    <div className="App">
       <NavBar />
       
       
      <div className='content'></div>
      <Switch>
          <Route exact path='/' component={WelcomePage} />  
          <Route exact path="/startscreen" component={StartScreen}/>
          <Route exact path="/login" component={Login}/>
         
        </Switch> 
   
    </div>
  );
}

export default App;
