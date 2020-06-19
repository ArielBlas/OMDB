import React from 'react';
import { Link } from 'react-router-dom';
import s from '../assets/scss/main.scss'

export default (props) => (
    <div className={s.container}>
        {props.movieList ? <h3 className={s.pageGridTitle}>Results for "{props.movieList}"</h3>: null}
        <div className={s.pageGrid}>
            {props.buscado.map(movie => (

            <div className={s.targetMovie} key={movie.imdbID}>


                <div className={s.whatchlist}>
                 
                    <div>
                    <svg className={s.whatchlistBg} width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation"><polygon className={s.watchlistRibbon} fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon className={s.whatchlistHover} points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon className={s.whatchlistShadow} points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon></svg><div className={s.watchlistIcon} role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={s.iconFavorite} viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg></div>
                    </div>
                    {/*
                    <div>
                    <svg className={s.whatchlistBg} width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation"><polygon className={s.watchlistRibbon} fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon className={s.whatchlistHover} points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon className={s.whatchlistShadow} points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon></svg><div className={s.watchlistIcon}role="presentation"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={s.iconFavorite} viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path></svg></div>
                    </div>*/}
                 
                </div>             
                    
                <Link to={`/movies/${movie.Title}`} className={s.targetMovieImg}>
                    <img src={movie.Poster} alt=""/>
                </Link>
                
                <div className={s.targetMovieContent}>
                    <Link to={`/movies/${movie.Title}`}>{movie.Title}</Link>
                </div>
            </div>
            ))}
        </div>
    </div>
)
