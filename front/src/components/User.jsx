import React from 'react';
import s from '../assets/scss/main.scss'
import u from '../assets/scss/users.scss'

export default (props) => (
    <div className={s.container}>
        <div className={s.favsCard}>        
            <div className={s.favsTitle}>
                <div className={u.userFavsImg}>
                    <h2>{props.user.name}</h2>
                </div>
                <div className={u.userFavsContent}>
                
                    <div className={u.userFavsContentPerfil}>
                        <h2>{props.user.name}</h2>
                        
                    </div>
                    <h2 className={u.userFavsText}>Peliculas favoritas</h2>
                </div>
                
            </div>
     
            
            {props.favs.map(favUser => (
                <div key={favUser.id} className={s.favsContent}>
                    <div className={s.favsPoster}>
                        <img src={favUser.poster}/>
                    </div>  
                    <div className={s.favsText}>
                        <h2>{favUser.title}</h2>
                        <p>{favUser.plot}</p>
                    </div>  
                </div>
            ))}
        </div>
    </div>
)
