import React from 'react';

import StaticRouter from '../utils/StaticRouter'
import Navbar from '../components/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main">
          <StaticRouter />
        </div>
      </div>
    </>
  )
}