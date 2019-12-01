import {Switch, Route} from 'react-router-dom';
import React from 'react';

import Home from './pages/home';
import Jogar from './pages/jogar';
import Vitoria from './pages/vitoria';

function Routes() {
  return(
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/jogar' exact component={Jogar} />
      <Route path='/vitoria' exact component={Vitoria} />
    </Switch>
  )
}

export default Routes;