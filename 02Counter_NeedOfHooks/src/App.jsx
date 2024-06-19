import { useState } from 'react'

import './App.css'

function App() {

  let [counter,setCounte] =useState(0) 
  // let counter = 15; 
  const addvalue =()=>{
      
      if(counter<20){
        counter=counter+1;
        setCounte(counter);
      }
      else{
      
      }
  }
  const removevalue=()=>{
    
      if(counter>0){
        counter=counter-1;
        setCounte(counter);
      }
      else{
      
      }
  }
  return (
    <>
      <h1>Mai aur React.</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addvalue}
      >Add value {counter}</button>
      <br />
      <br />
      <button
      onClick={removevalue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
