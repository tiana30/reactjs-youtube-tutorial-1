import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StatefullComp from './class-comp/StatefullComp';
import HelloComp from './function-comp/HelloComp';


ReactDOM.render(
  <React.StrictMode>
   <HelloComp />
   <hr />
   <StatefullComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
