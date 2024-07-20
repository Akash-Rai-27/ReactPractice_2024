import React, { useEffect, useRef, useState } from 'react'
// console.log("loading the component")
function CountRenders() {
    // console.log("testing")
    const renderCount = useRef(0);
    const[count, setCount] = useState(0)

    useEffect(()=>{
        console.log("run")
        renderCount.current = renderCount.current + 1
        console.log("stop")
    },[])
  return (
    <div>
        <h1>no on renders:{renderCount.current}</h1>
        <h2>Count is : {count}</h2>
        <button onClick={()=>(setCount(count + 1))}>count</button>
    </div>
  )
}

export default CountRenders