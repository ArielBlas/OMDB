import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import s from '../assets/scss/main.scss'

export default (props) => (
        
        <nav>
            <div className={s.omdbHeader}>
                <div className={s.omdbIcon}>
                    <Link to="/">OMDb</Link>
                </div>
                <div className="omdb-menu" >
                    <a href="" className={s.menuHamburger}>Menu</a>
                </div>
                <form className={s.omdbForm} onSubmit={props.handleSubmit}>

                    <div className={s.omdbAll}>
                        <label>All</label>
                        <svg width="12" height="12" viewBox="4 4 14 14" fill="currentColor" role="presentation">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                        </svg>
                        <input type="checkbox" hidden/>
                    </div>

                    <div className={s.omdbSearch}>
                        <input type="text" placeholder="Search OMDb" onChange={props.handleChange} value={props.enviar}/>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="icon-search" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                        </button>
                    </div>
                    
                </form>
                <div className={s.omdbPro}>
                    <Link to='/users'>People</Link>
                </div>
                <div className={s.lineDecoration}></div>
                <div className={s.omdbWatchlist}>
                    <Link to="/favs">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={s.iconList} viewBox="0 2 24 24" fill="currentColor" role="presentation"><path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path></svg>
                        Watchlist <span>{props.data.id ? props.favs.length : null}</span>
                    </Link>                
                </div>

                <div className={s.omdbSignIn}>
                    {props.data.id ? 
                    <div className={s.dataUser} onClick={props.handleClick}>
                        <label className={s.dataUserName}>{props.data.name}</label>
                        <svg width="12" height="12" viewBox="4 4 14 14" fill="currentColor" role="presentation">
                            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
                        </svg> 
                        {props.user ? <div>
                            <ul className={s.listUser}>
                                <li onClick={props.logoutClick}>Logout</li>
                            </ul>
                        </div> : null}
                    </div>
                    :<Link to="/sign_in">Sign In</Link>}
                </div>
            </div>
            {props.estado ? <Redirect to='/search' /> : null}
        </nav>
    
)