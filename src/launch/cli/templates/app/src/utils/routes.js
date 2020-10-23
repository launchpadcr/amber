import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/index';
import Pet from '../pages/Pet'

function Routes(props) {
  const { path } = props;

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pets" component={() => <Pet />} />
      {/* <Route component={Error} /> */}
    </Switch>
  )
}

export default Routes