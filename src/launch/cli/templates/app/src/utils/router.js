import React from 'react';
import { StaticRouter } from 'react-router-dom'

import Routes from './routes'

function Router(props) {
  const { path } = props;

  return (
    <StaticRouter location={{ pathname: path }}>
      <Routes />
    </StaticRouter>
  )
}

export default Router