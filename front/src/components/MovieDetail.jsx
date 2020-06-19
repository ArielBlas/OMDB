import React from 'react';
import s from '../assets/scss/main.scss'

export default ({movieName, movie, handleClickFavs}) => (
    
        <div className={s.cardContainer}>
            <div className={s.cardImg}>
                <img src={movie.Poster}/>
            </div>
            <div className={s.cardContent}>
                <div className={s.cardTitle}>
                    <h1>{movieName}</h1>
                    <span>{movie.imdbRating}/10</span>
                </div>
                
                <div className={s.cardText}>
                    <p>{movie.Plot}</p>
                    <p>Actors: <span>{movie.Actors}</span></p>
                    <p>Director: <span>{movie.Director}</span></p>
                    <p>Genre: <span>{movie.Genre}</span></p>
                    <p>Awards: <span>{movie.Awards}</span></p>

                    <button onClick={() => handleClickFavs(movie.Title, movie.Plot, movie.Poster)}>Add to Watchlist</button>
                </div>
            </div>
        </div>
    
)

