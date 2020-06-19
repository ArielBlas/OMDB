import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import FavoritesContainer from '../containers/FavoritesContainer'
import SearchContainer from '../containers/SearchContainer'
import NavbarContainer from '../containers/NavbarContainer'
import MovieDetailContainer from '../containers/MovieDetailContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterContainer from '../containers/RegisterContainer'
import UsersContanier from '../containers/UsersContainer'
import UserContanier from '../containers/UserContainer'
import SingIn from './Sign_in';

export default () => (
    <div>
        <NavbarContainer/>
        <Switch>
            <Route exact path="/search" component={SearchContainer}/>
            <Route path="/movies/:movieId" component={MovieDetailContainer}/>
            <Route path="/favs" component={FavoritesContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/register" component={RegisterContainer}/>
            <Route path="/sign_in" component={SingIn}/>
            <Route exact path="/users" component={UsersContanier}/>
            <Route path="/users/:userId" component={UserContanier}/>
        </Switch>
    </div>
)
