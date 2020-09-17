import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/HomePage/HomePage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { MainManu, MainManuItem } from './components/mainManu/mainManu';
import {  HashRouter,  Route,  Switch} from 'react-router-dom';
import { ContactPage } from './components/ContactPage/ContactPage';
import { UserLogIn } from './components/UserLoginPage/UserLogIn';



const manuItems = [
  new MainManuItem('Home', '/'),
  new MainManuItem('Contact', '/contact/'),
  new MainManuItem('Log In', '/user/logIn/'),
]

ReactDOM.render(
  <React.StrictMode>
    <MainManu items={manuItems}></MainManu>
    <HashRouter>
      <Switch>
        <Route exact path='/' component = {HomePage}/>
        <Route  path='/contact' component = {ContactPage}/>
        <Route  path='/user/login' component = {UserLogIn}/>
        
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
