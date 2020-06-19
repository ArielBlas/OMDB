import React from 'react';
import f from '../assets/scss/forms.scss'

export default (props) => (
    <div className={f.formContainer}>
        <h2>Create account</h2>
        <form onSubmit={props.handleSubmit}>
            <label>Your name:</label>
            <input type="text" onChange={props.handleNameChange} className={f.formInput}/>
            <label>Email:</label>
            <input type="email" onChange={props.handleEmailChange} className={f.formInput}/>
            <label>Password:</label>
            <input type="password" onChange={props.handlePasswordChange} className={f.formInput}/>
            <label>Re-enter Password:</label>
            <input type="password" className={f.formInput}/>
            <input type="submit" value="Create your IMDb account" className={f.formSubmit}/>
        </form>
    </div>
)