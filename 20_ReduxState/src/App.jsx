import { useSelector } from "react-redux"


function App() {

  const {value} = useSelector((state)=>state.counter)
  // console.log(d)
  return (
    <>
      <div>
          <h1>Redux tool kit {value} </h1>
      </div>

      <div>
        <button>inc</button>
        <button>dec</button>
        <button></button>
      </div>
    
    </>
  )
}

export default App
