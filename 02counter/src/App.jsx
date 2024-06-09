
import { useState } from 'react';
import './App.css'

function App() {

  let [chaiNum, setChaiNum] =  useState(1);
  
  // let chaiNum = 20;
  const addValue = ()=>{
    // console.log("chai added", Date.now())
    if(chaiNum <20){
      // chaiNum = chaiNum + 1;
      setChaiNum((prevCounter)=> prevCounter + 1);
      console.log(chaiNum);
    }
    
  }

  const removeValue = () =>{

    if(chaiNum > 0){
    // chaiNum = chaiNum - 1;
    setChaiNum((prevCounter)=> prevCounter - 1);
    setChaiNum((prevCounter)=> prevCounter - 1);
    console.log(chaiNum);
    }
    
  }
  return (
    <>
      <h1>Chai aur coffee</h1>
      <h2>update chai : {chaiNum} </h2>
      <button
        onClick={addValue}
        >Add Chai</button>
      <br/>
      <button
       onClick={removeValue}
       >Remove Chai</button>
    </>
  )
}

export default App
