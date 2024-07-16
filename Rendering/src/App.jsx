
import './App.css'
import DeleteDialog from './components/DeleteDialog'
import DeleteMain from './components/DeleteMain'
import Gallery from './components/Gallery'

function App() {
  
  const fruit = {
    name:"PAPAYA",
    color:"Orange"
  }

  return (
    <>
      {/* <h1>Delete</h1>
      <Gallery fruit = {fruit}/> */}
      <h1>Delete Dialog</h1>
      <DeleteMain/>
    </>
  )
}

export default App
