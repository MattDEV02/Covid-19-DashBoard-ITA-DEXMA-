import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const rootID = 'root';

const
   app = (
      <React.StrictMode>
         <App />
      </React.StrictMode>
   ),
   root = document.getElementById(rootID);


ReactDOM.render(app, root);
