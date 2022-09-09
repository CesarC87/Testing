import React , { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName:string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}


function App() {

  const [ color, setColor ] = useState('red')
  const [ disabled, setDisabled ] = useState(false)

  const handleBgChange = () => {
    color === 'red' ? setColor('blue') : setColor('red')
  }
  const handleDisable = (e:any) => {
    // setDisabled(disabled === false ? true : false)
    setDisabled(prev => prev = e.target.checked)       
  }
  console.log('disabled desde app', disabled)


  return (
    <>
    <div className="App"> 
      <button 
      id="button"
      style={{backgroundColor: disabled ? 'gray' : color}}
      onClick={handleBgChange}
      disabled={disabled}
      >{`Change to ${color === 'red' ? 'blue' : 'red'}`}      
      </button> 
     
      <hr />
      <input 
        type="checkbox" 
        onChange={ handleDisable }
        id="disable-button-checkbox"/> 
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
    </>
  );
}

export default App;
