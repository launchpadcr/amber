import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import '../styles/globals.scss';

import Home from './index';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {/* <Route component={Error} /> */}
    </BrowserRouter>
  ), document.getElementById('root'));
})