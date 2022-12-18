import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
import searchIcon from './search.svg'
import './App.css'

//2efeb9c2

const API_URL = 'http://www.omdbapi.com?apikey=2efeb9c2';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')   

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies();
    }, []);


    return (
        <div className='app'>
            <h1>Movie</h1>

            <div className='search'>
                <input
                    placeholder='Searhc for movies'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <img src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>No movies found</h2>
                        </div>
                    )
            }

        </div>
    )
}

export default App