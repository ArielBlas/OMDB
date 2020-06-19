import React from 'react';
import s from '../assets/scss/main.scss'

export default (props) => (
    <div className={s.container}>
        <div className={s.favsCard}>
            <div className={s.favsTitle}>
                <h2>Peliculas favoritas</h2>
            </div>
            {props.auth.id ? props.favs.map(fav => (
                <div key={fav.id} className={s.favsContent}>
                    <div className={s.favsPoster}>
                        <img src={fav.poster}/>
                    </div>  
                    <div className={s.favsText}>
                        <h2>{fav.title} <span className={s.favsDelete} onClick={() => props.handleClickDelete(fav.id)}>x</span></h2>
                        <p>{fav.plot}</p>
                    </div>  
                </div>
            )): null}
        </div>
    </div>
)