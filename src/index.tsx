import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainManu, MainManuItem } from './components/mainManu/mainManu';

const manuItems = [
  new MainManuItem('Home', '/'),
  new MainManuItem('Contact', '/contact/'),
  new MainManuItem('Log In', '/user/logIn/'),
]

ReactDOM.render(
  <React.StrictMode>
    <MainManu items={manuItems}></MainManu>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
