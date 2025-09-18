import './App.css'
import Main from './components/Main'
import ChefClaude from './components/ChefClaude/ChefClaude'
import BusinessCard from './components/BusinessCard/BusinessCard'
import TravelJournal from './components/TravelJournal/TravelJournal'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Main />}></Route>
          <Route path='/chef-claude' element={<ChefClaude />}></Route>
          <Route path='/travel-journal' element={<TravelJournal />}></Route>
          <Route path='/business-card' element={<BusinessCard />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
