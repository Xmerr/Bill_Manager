import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Router';
import '@helpers/prototypes.js';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.body.appendChild(document.createElement('div')));
});
