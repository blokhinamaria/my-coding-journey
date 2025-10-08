import { Link } from 'react-router-dom'
import './Main.css'


export default function Main() {
    return (
        <main>
            <h1>Projects</h1>
            <div className='main-project-container'>
                <Link to="/chef-claude"><button>Chef Claud</button></Link>
                <Link to="/travel-journal"><button>Travel Journal</button></Link>
                <Link to="/business-card"><button>Business Card</button></Link>
                <Link to="/color-picker"><button>Color Picker</button></Link>
                <Link to="/movie-watchlist"><button>Movie Watchlist</button></Link>
            </div>
        </main>
    )
}