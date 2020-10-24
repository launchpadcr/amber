import React from 'react';
import amberLogo from '../assets/images/amberLogo.png';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={amberLogo} alt="Amber logo" height="30" />
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/pets">Pets</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar