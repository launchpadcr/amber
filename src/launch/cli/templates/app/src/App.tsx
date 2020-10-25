import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import Dynamic from './pages/Dynamic'
import 'assets/styles/globals.scss'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dynamic">Dynamic</Link>
        <Link to="/no_existant_url">404</Link>
      </nav>
      <div className="content">
        <div>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </div>
    </Root>
  )
}

export default App
