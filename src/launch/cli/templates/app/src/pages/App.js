import React from 'react'
import ReactDOM from 'react-dom'

import Routes from '../utils/Routes';
import { BrowserRouter } from "react-router-dom";
import '../assets/styles/globals.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}