import { useCallback, useEffect, useState , useRef } from "react"


function App() {
  
  const[length, setLength] = useState(8);
  const[numberAllow , setNumberAllow] = useState(false);
  const[charAllow , setCharAllow] = useState(false);

  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);


  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  },[password,length])

  

  const passwordGenerator =  useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllow) str += "0123456789";
    if(charAllow) str += "!@#$%^&*(){}<>?";

    for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random() * str.length + 1)

       pass += str.charAt(char)
    }
    setPassword(pass);

  },[length, numberAllow, charAllow, setPassword])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllow, charAllow , passwordGenerator])

  return (
    <>
      <div className="bg-slate-600 h-screen p-2">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-green-600 bg-slate-300">
          <h1 
            className="text-2xl text-center py-4 px-2 mb-2"
          > Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-md"
            placeholder="PASSWORD"
            readOnly
            ref={passwordRef}
            />
          <button className="outline-none bg-blue-600 text-white px-3 py-1 shrink-0"
          onClick={copyPassword}
          >Copy</button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="felx items-center gap-x-1">
              <input
                type="range"
                min={8}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e)=>{
                    setLength(e.target.value)
                }}    
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                  <input 
                    type="checkbox"
                    defaultChecked = {numberAllow}
                    id="numberInput"
                    onChange={()=>{
                      setNumberAllow((prev) => !prev);
                    }}
                  />
                  <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
                  <input 
                    type="checkbox"
                    defaultChecked = {charAllow}
                    id="characterInput"
                    onChange={()=>{
                      setCharAllow((prev) => !prev);
                    }}
                  />
                  <label htmlFor="characterInput">Character</label>
            </div>
        </div>

        
        </div>

      </div>
    </>
  )
}

export default App
