import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom';
import history from './api/history';
import store from './api/store';
import App from './ui/layouts/App';

/**
 * ReactDOM.render, funcion de react-dom que coloca un elemento jsx en el "dom",
 * utilizando un selector de <div id="root"> perteneciente a public->index.html->body
 */
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);