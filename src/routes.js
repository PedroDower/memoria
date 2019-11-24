import {Switch, Route} from 'react-router-dom';
import React from 'react';

import Home from './pages/home';
import Jogar from './pages/jogar';

function Routes() {
  return(
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/jogar' exact component={Jogar} />
    </Switch>
  )
}

export default Routes;