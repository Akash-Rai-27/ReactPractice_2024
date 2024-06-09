import Card from "./component/Card"

function App() {
  let myObj = {
    username : "Kaido",
    age: 21 
  }

  return (
    <>
      <div className="bg-gray-700  h-full">
      <h1 className="bg-green-700 text-white p-4 rounded-md"> Tail Wind Test</h1>

        <Card/>
        <Card/>
      </div>      
    </>
  )
}

export default App
