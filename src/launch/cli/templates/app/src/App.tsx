import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'

import Navbar from './components/Shared/Navbar';
import Spinner from './components/Shared/Spinner';

import 'assets/styles/globals.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Navbar />
      <div className="content">
        <div>
          <React.Suspense fallback={<Spinner />}>
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </div>
    </Root>
  )
}

export default App
