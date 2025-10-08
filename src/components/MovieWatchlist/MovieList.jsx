import { useEffect, useState } from 'react'

export default function MovieList ( { movies, type} ) {

    const [ watchlistMovies, setWatchlistMovies ] = useState(() => {
        const saved = localStorage.getItem('watchlist')
        if (saved) {
            return JSON.parse(saved)
        } else {
            return [];
        }
    });

    function addToWatchlist(movie) {
            setWatchlistMovies(prev => {
                if (prev.some(m => m.id === movie.id)) {
                    return prev
                } else {
                    return [...prev, movie]
                }
            }
        )
    }

    function removeFromWatchlist(movie) {
        setWatchlistMovies(prev => prev.filter(m => m.id !== movie.id))
    }

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlistMovies));
    }, [watchlistMovies])

    const [ moviesToDisplay, setMoviesToDisplay ] = useState([])

    useEffect(() => {
        if (type === 'watchlist') {
            setMoviesToDisplay(watchlistMovies);
        } else {
            setMoviesToDisplay(movies);
            }
        }, [type, movies, watchlistMovies])

    return (
        <section className="movie-list">
            {moviesToDisplay.map(movie => 
        (
            <div className="movie-item" key={movie.id}>
                <div className="image-container">
                    <img src={movie.poster}></img>
                </div>
                <div className="movie-details">
                    <div className="movie-title-section">
                        <h2>{movie.title}</h2>
                        <p className="movie-rating"><span className="material-symbols-rounded star">star</span> {movie.rating}</p>
                    </div>
                    <div className="movie-detail-section">
                        <p>{movie.runtime}</p>
                        <p>{movie.genre}</p>
                        {
                            watchlistMovies.some(m => m.id === movie.id) ? (
                                <button className="add-to-wishlist" onClick={() => removeFromWatchlist(movie)}><span className="material-symbols-rounded">add_circle</span><span>Remove</span></button>
                            ) : (
                                <button className="add-to-wishlist" onClick={() => addToWatchlist(movie)}><span className="material-symbols-rounded">add_circle</span><span>Watchlist</span></button>
                            )
                        }
                    </div>
                    <div className="movie-description">
                        <p>{movie.plot}</p>
                    </div>
                </div>  
            </div>
        )
        
    )}
        </section>
    )
}