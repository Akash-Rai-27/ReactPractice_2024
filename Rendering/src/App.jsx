
import './App.css'
import DeleteDialog from './components/DeleteDialog'
import DeleteMain from './components/DeleteMain'
import EventHandling from './components/EventHandling'
import Gallery from './components/Gallery'
import LearnChat from './components/LearnChat'

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

      {/* <h1>add Interactivity - Responding to Events</h1>
      <EventHandling/> */}

      <h2>Char js</h2>
      <LearnChat/>
    </>
  )
}

export default App
