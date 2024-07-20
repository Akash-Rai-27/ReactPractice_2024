import React, { useRef, useState } from 'react'

function LearningRef() {
    const inputRef = useRef('');
    const[count,setCount] = useState(0);
    const prevValueRef = useRef(count);
    // console.log("prev:",prevValueRef)
    const handleConsole = ()=>{
        console.log(inputRef.current.value)
    }
    const handleFocus = () => {
        inputRef.current.focus();
    }

    const nameRef = useRef('');

  return (
    <div>
        <input ref={inputRef} onChange={handleConsole} type='text'/>
        {/* <p>{prevValueRef}</p> */}
        {count}
        <button onClick={()=>setCount((prev) => (
            prevValueRef.current = prev,
            (prev + 1)
        ))}>count</button>
        <button onClick={handleFocus}>Search</button>
    </div>
  )
}

export default LearningRef