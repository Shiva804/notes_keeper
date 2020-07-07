import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
  HashRouter as Router,
  Route,
  Switch
  
} from "react-router-dom";
import { ProtectedRoute } from "./protected.route";
import LoginComponent from './login/login'
import SignUpComponent from './signup/signup'
import DashboardComponent from './dashboard/dashboard'
import firebaseConfig from './firebase'




//Everything within the <Router> tag is a routing page
const Routing = (
  <Router>
    <div id = 'routing-container'>
      <Switch>
      <Route path= '/' exact component={LoginComponent}></Route>
      <Route path= '/signup' exact component={SignUpComponent}></Route>
      <ProtectedRoute path= '/dashboard' exact component={DashboardComponent}></ProtectedRoute>
      <Route path = '*' component = {()=>'404 NOT FOUND'}></Route>
      </Switch>
    </div>
  </Router>
)



//init the firebase
const firebase = require('firebase')
require('firebase/firestore')


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



//rendering the routing pages
ReactDOM.render(

  Routing,
  document.getElementById('root')
);


serviceWorker.unregister();
