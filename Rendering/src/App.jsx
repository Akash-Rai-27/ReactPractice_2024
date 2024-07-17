
import './App.css'
import DeleteDialog from './components/DeleteDialog'
import DeleteMain from './components/DeleteMain'
import EventHandling from './components/EventHandling'
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
      {/* <h1>Delete Dialog</h1> */}
      {/* <DeleteMain/> */}

      <h1>add Interactivity - Responding to Events</h1>
      <EventHandling/>
    </>
  )
}

export default App
