import React, { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
import './App.css'
import Chart from "./Chart"

const API_URL = 'https://api.jikan.moe/v4/anime?q=1&limit=20';

const App = () => {

    const [anime, setAnime] = useState([]);

    const searchMovies = async () => {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setAnime(data.data);
    }

    useEffect(() => {
        searchMovies();
    }, []);


    return (
        <div >
            <div className='app'>
                <h1>AnimeLand</h1>

                {
                    anime?.length > 0
                        ? (
                            <div className='container'>
                                {anime.map((movie) => (
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
          <Chart />
        </div>

    )
}

export default App