import './App.css'
import BusinessCard from './components/BusinessCard/BusinessCard'
import TravelJournal from './components/TravelJournal/TravelJournal'

function App() {

  return (
    <>
      {/* <main>
          <ul>
            <li>
              <label>Business Card: React + CSS</label>
              <button><a href='./components/BusinessCard/BusinessCard.jsx'>Business Card</a></button>
            </li>
          </ul>
      </main> */}
      <TravelJournal />
      <hr></hr>
      <BusinessCard />
      
      
    </>
  )
}

export default App
