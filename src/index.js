import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Layout from './layout/layout';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './function/serviceWorker';
import 'epm-ui-css';

ReactDOM.render (
  <Router>
    <div>
      <Route path="/" component={ Layout }/>
    </div>
  </Router>,
  document.getElementById ( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();
