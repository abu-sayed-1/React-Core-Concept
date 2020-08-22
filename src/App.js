import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name =  'Dr.zakir naik';
  const obj={
    name:'Raju',
    id:12121,
    phone:'0178686865',
    Email:'abusayedrakib69gmail.com'

  }
  let tt={
    color:'blue',
backgroundColor:'red'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p  id='#hh'>
          Edit donn <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1> Rakib</h1>
  <h2 className="tt" style={tt}> Rakib:{10+4}</h2>
  <h2> Rakib:{(10+4)*25+65}</h2>
  <h5>{name}</h5>
      <p> Abu Sayed Rakib</p>
  <h6 style={{backgroundColor:'white'}}>  {obj.Email} </h6> <h6> {obj.phone}</h6>  
       
        
        

      </header>
    </div>
  );
}

export default App;
