import React from 'react';

import HelloAmber from '../components/HelloAmber';
import HelloReact from '../components/HelloReact';

import amberLogo from '../assets/images/amberLogo.png';
import reactLogo from '../assets/images/reactLogo.png';
import '../assets/styles/Home.module.scss';

function Home() {
  return (
    <>
      <div className="App" style={{ textAlign: 'center' }}>
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
    </>
  );
}

export default Home;
