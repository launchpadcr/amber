import React from 'react';
import { StaticRouter as ReactStaticRouter } from 'react-router-dom'

import Routes from './Routes'

function StaticRouter(props) {
  const { path } = props;

  return (
    <ReactStaticRouter location={{ pathname: path }}>
      <Routes {...props} />
    </ReactStaticRouter>
  )
}

export default StaticRouter