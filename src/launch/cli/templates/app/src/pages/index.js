import React from 'react';
import { Link } from 'react-router-dom';

import amberLogo from '../images/amberLogo.png';
import reactLogo from '../images/reactLogo.png';
import '../styles/Home.module.scss';

import HelloAmber from '../components/HelloAmber';
import HelloReact from '../components/HelloReact';

function Home() {
  return (
    <div className="App">
      <header className="links">
        <Link to="/">Home</Link>
      </header>
      <div>
        <img src={amberLogo} id="amber-logo" alt="Amber Logo" />
        <div />
        <img src={reactLogo} id="react-logo" alt="React Logo" />
      </div>
      <div>
        <div>Reactive Amber</div>
        <HelloReact />
        <HelloAmber />
      </div>
    </div>
  );
}

export default Home;
