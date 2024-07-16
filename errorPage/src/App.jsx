// import ErrorPage from "./components/ErrorPage"
import {useRef, useState } from "react";

function App() {

  let state = 20;
  
  
  const[count, setCount] = useState(1);
  const intervalRef = useRef(null);

  const handleCount = ()=>{
    console.log("start")
    console.log("my state is :" ,state)
    state = state+1;
    console.log("now my state is :",state);
    intervalRef.current = setInterval(()=>{
      console.log("before:: ",state);
      setCount((prev)=>prev+1)
      console.log("after :: ",state+1);
    },1000)
  }

  

  const stopCount = () =>{
    console.log("stop")
    clearInterval(intervalRef.current)
    intervalRef.current = null;
    
  }
  
  return (
    <div className='App'>
      <h1>Count : {count}</h1>
      <p>{state}</p>
      <button onClick = {handleCount}>Inc</button>
      <button onClick = {stopCount}>Dec</button>
      
    </div>
  )
}

export default App




{/* <div className="bg-gray-600 h-screen">
      <div className="bg-gray-600 max-h-screen max-w-7xl mx-auto my-auto">
        <ErrorPage/>
      </div>
      </div> */}