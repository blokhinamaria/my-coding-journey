import { Link } from 'react-router-dom'
import { useState } from 'react'

import MovieList from './MovieList'

import './MovieWatchlist.css'
import Header from './Header';


export default function MovieWatchlist() {

    const [ searchValue, setSearchValue ] = useState([]);

    function search(formData) {
        const input = formData.get('search').trim();
        if (input) {
            setSearchValue(input);
            searchMovies(input);
        }
    }

    const [ moviesResults, setMoviesResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('')


    const title = 'Find your film';
    const buttonLink = '/movie-watchlist/my-watchlist';
    const buttonText = 'My Wishlist'

    async function searchMovies(searchParam) {
        setMoviesResults([]);
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=71f0bf33&s=${searchParam}`)
        const data = await response.json();
        const movies = data["Search"]
        if (movies) {
            const promiseMovies = await Promise.all(movies.map(movie => 
                fetchMovieDetails(movie['Title']).then(data => {return data}))
            )
            setMoviesResults(promiseMovies);
        } else {
            setErrorMessage('Unable to find what you’re looking for. Please try another search.')
            setMoviesResults([]);
        }
        
    }

    async function fetchMovieDetails(title) {

        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=71f0bf33&t=${title}`)
        const data = await response.json()
        const movie = {
            id: data['imdbID'],
            title: data['Title'],
            rating: data['Ratings']?.[0]?.['Value'],
            runtime: data['Runtime'],
            genre: data['Genre'],
            plot: data['Plot'],
            poster: data['Poster']
        }


        return movie;
    }

    return (
        <main className="movie-watchlist-main">
            <Header title={title} buttonLink={buttonLink} buttonText={buttonText} />
            <section className='search-bar'>
                <form action={search} id='search-movie'>
                    <span className="material-symbols-rounded">search</span>
                    <input id='search' name='search' type='text' placeholder='Search for a movie' aria-label='search for a movie' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
                    <button type='submit'>Search</button>
                </form>
            </section>
            { moviesResults.length > 0 ? 
                    (
                    <MovieList movies={moviesResults} type={'search'}/>
                ) : (
                    errorMessage ? (
                        <section className='movie-list empty'>
                            <h2>{errorMessage}</h2>
                        </section>
                    ) : (
                        <section className='movie-list empty'>
                            <span className="material-symbols-rounded">theaters</span>
                            <h2>Start exploring</h2>
                        </section>
                    )
                )    
            }


        </main>
    )
}