import React from 'react';
import f from '../assets/scss/forms.scss'

export default (props) => (
    <div className={f.formContainer}>
        <h2>Sign-In</h2>
        <form onSubmit={props.handleSubmit}>
        <label>Email:</label>
        <input type="email" onChange={props.handleEmailChange} className={f.formInput}/>
        <label>Password:</label>
        <input type="password" onChange={props.handlePasswordChange} className={f.formInput}/>
        
        <input type="submit" value="Sign-in" className={f.formSubmit}/>
        </form>
    </div>
)
