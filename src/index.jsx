import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const selector = '#root';

const
   app = <App />,
   root = document.querySelector(selector);

ReactDOM.render(app, root);
