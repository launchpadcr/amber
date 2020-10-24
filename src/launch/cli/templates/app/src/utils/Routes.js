import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/index';

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home {...props} />} />
      {/* <Route component={Error} /> */}
    </Switch>
  )
}

export default Routes