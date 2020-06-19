// el inicio de la app
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

import Main from './components/Main'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={Main}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
