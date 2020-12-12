import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const selector = 'root';

const app =
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   root = document.getElementById(selector)


ReactDOM.render(app, root);
