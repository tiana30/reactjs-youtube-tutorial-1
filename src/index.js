import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import StatefullComp from './class-comp/StatefullComp';
// import HelloComp from './function-comp/HelloComp';
import Home from './pages/Home/Home';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import  AppReducer from './redux/globalReducer';

// //Store
// const store = createStore(AppReducer);
// console.log(store.getState());

ReactDOM.render(
  //  <Provider store = {store}>
     <Home />
   //</Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
