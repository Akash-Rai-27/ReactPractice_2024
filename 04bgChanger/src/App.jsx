import { useState } from "react"


function App() {

  const[color, setColor]  = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style = {{backgroundColor : color}}>
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
            <button
              className="outline-none px-4 bg-[red] rounded-lg"
              onClick={()=> setColor("red")}  
            >red</button>
            <button
              className="outline-none px-4 bg-[green] rounded-lg"
              onClick={()=> setColor("green")}  
            >green</button>
            <button
              className="outline-none px-4 bg-[blue] rounded-lg"
              onClick={()=> setColor("blue")}  
            >blue</button>
            <button
              className="outline-none px-4 bg-[grey] rounded-lg"  
              onClick={()=> setColor("grey")}
            >grey</button>
            <button
              className="outline-none px-4 bg-[pink] rounded-lg" 
              onClick={()=> setColor("pink")} 
            >pink</button>
            <button
              className="outline-none px-4 bg-[violet] rounded-lg" 
              onClick={()=> setColor("violet")} 
            >violet</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
