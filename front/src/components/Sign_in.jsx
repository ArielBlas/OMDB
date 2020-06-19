import React from 'react';
import { Link } from 'react-router-dom'
import s from '../assets/scss/main.scss'

export default () => (
    <div className={s.signContainer}>
        <h2>Sign in</h2>
        <div className={s.signCard}>
            <Link to="/login">
                Sign in with OMDb
            </Link>
            <Link to="/register" className={s.createCard}>
                Create a New Account
            </Link>
        </div>
    </div>
)