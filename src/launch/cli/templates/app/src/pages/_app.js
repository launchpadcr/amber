import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../utils/routes'
import { BrowserRouter } from "react-router-dom";
import '../styles/globals.scss';

// TODO: This ensures all images are avaiable for SSR but it should really be
// in the staticRouter
require.context(
  "../images",
  true,
  /\.(gif|jpg|png|svg|jpeg|ico)$/i
);

function _App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(_App(), document.getElementById('root'));
})