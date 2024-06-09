import Card from "./component/Card"

function App() {
  let myObj = {
    username : "Kaido",
    age: 21 
  }

  let newAr = [1,2,3,4];

  return (
    <>
      <div className="bg-gray-700  h-full">
      <h1 className="bg-green-700 text-white p-4 rounded-md"> Tail Wind Test</h1>

        <Card username = "biscuit and chai" />
        <Card username = "kola" btnText = "forest"/>
      </div>       
    </>
  )
}

export default App
