import React, { useEffect, useState,useRef } from 'react'

function Timer() {
    const timerIdRef = useRef();
    const renderCount = useRef(0);
    const [time,setTime] = useState(new Date().toTimeString());

    renderCount.current = renderCount.current + 1
    useEffect(()=>{
        timerIdRef.current = setInterval(()=>{
            console.log('timer ticks')
            setTime(new Date().toString())
        },1000);


        return ()=> {
            clearInterval(timerIdRef.current);
        }
    },[])
  return (
    <div>
        console {time}
        <p>render : {renderCount.current}</p>
    </div>
  )
}

export default Timer