import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/no_existant_url">404</Link>
  </nav>
);
