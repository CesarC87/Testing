import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [ color, setColor ] = useState('red')

  const handleBgChange = () => {
    color === 'red' ? setColor('blue') : setColor('red')
  }

  return (
    <div className="App"> 
      <button 
      style={{backgroundColor: `${color}`}}
      onClick={handleBgChange}>{`Change to ${color === 'red' ? 'blue' : 'red'}`}</button>
    </div>
  );
}

export default App;
