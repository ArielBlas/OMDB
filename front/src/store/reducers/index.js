import { combineReducers } from 'redux';
import favoritesReducer from './favorites-reducers';
import searchReducer from './search-reducers';
import movieReducer from './movie-reducers';
import loginReducer from './login-reducers';
import registerReducer from './register-reducers';
import authReducer from './auth-reducers';
import usersReducer from './users-reducers';
import userReducer from './user-reducers'

export default combineReducers({
    favs: favoritesReducer,
    search: searchReducer,
    movie: movieReducer,
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
    users: usersReducer,
    user: userReducer
})