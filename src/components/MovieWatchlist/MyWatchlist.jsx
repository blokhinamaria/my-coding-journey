import { Link } from "react-router-dom"
import { useState } from "react";
import './MovieWatchlist.css'
import MovieList from "./MovieList"
import Header from "./Header";


export default function MyWatchlist() {

    const title = 'My wishlist';
    const buttonLink = '/movie-watchlist';
    const buttonText = 'Search for movies'

    const [ watchlistMovies, setWatchlistMovies ] = useState(() => {
        const saved = localStorage.getItem('watchlist')
        if (saved) {
            return JSON.parse(saved)
        } else {
            return [];
        }
    });

    console.log(watchlistMovies)

    return (
        <main className="movie-watchlist-main">
            <Header title={title} buttonLink={buttonLink} buttonText={buttonText} />
            {watchlistMovies.length > 0 ? (
                <MovieList movies={watchlistMovies} type={'search'}/>
            ) : (
                <section className="movie-list empty">
                    <h2 style={ {marginBottom: "10px"}}>Your watchlist is looking a little empty...</h2>
                    <button className="add-to-wishlist"><span className="material-symbols-rounded">add_circle</span><span> Let’s add some movies!</span></button>
                </section>
            )
        }
            
        </main>
    )
}