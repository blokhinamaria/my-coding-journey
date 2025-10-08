import './App.css'
import Main from './components/Main'
import ChefClaude from './components/ChefClaude/ChefClaude'
import BusinessCard from './components/BusinessCard/BusinessCard'
import TravelJournal from './components/TravelJournal/TravelJournal'
import ColorPicker from './components/ColorPicker/ColorPicker'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MovieWatchlist from './components/MovieWatchlist/MovieWatchlist'
import MyWatchlist from './components/MovieWatchlist/MyWatchlist'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Main />}></Route>
          <Route path='/chef-claude' element={<ChefClaude />}></Route>
          <Route path='/travel-journal' element={<TravelJournal />}></Route>
          <Route path='/business-card' element={<BusinessCard />}></Route>
          <Route path='/color-picker' element={<ColorPicker />}></Route>
          <Route path='/movie-watchlist' element={<MovieWatchlist />}></Route>
            <Route path='/movie-watchlist/my-watchlist' element={<MyWatchlist />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
