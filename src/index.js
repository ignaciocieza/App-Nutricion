import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/**
 * ReactDOM.render, funcion de react-dom que coloca un elemento jsx en el "dom",
 * utilizando un selector de <div id="root"> perteneciente a public->index.html->body
 */
ReactDOM.render(<App/>, document.querySelector('#root'));