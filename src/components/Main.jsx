import { Link } from 'react-router-dom'
import './Main.css'


export default function Main() {
    return (
        <main>
            <h1>Projects</h1>
            <div className='main-project-container'>
                <button><Link to="/chef-claude">Chef Claud</Link></button>
                <button><Link to="/travel-journal">Travel Journal</Link></button>
                <button><Link to="/business-card">Business Card</Link></button>
            </div>
        </main>
    )
}