import React from 'react'

const MovieCard = ({movie}) => {

  return (
    <div className="movie">
      <div>
        <p>{movie.type}</p>
      </div>

      <div>
        <img src={movie.images.jpg.image_url} alt={movie.Title} />
      </div>

      <div>
        <h3>{movie.title}</h3>
      </div>

      <div>
        <h5>Duration: <span>{movie.duration}</span></h5>
        <h5>Popularity: <span>{movie.popularity}</span></h5>
        <h5>Rating: <span>{movie.rating}</span></h5>
      </div>

    </div>
  )
}

export default MovieCard