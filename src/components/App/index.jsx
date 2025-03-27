import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import * as routes from '@/data/routes';
import { Brainstorming, Home } from '@/views';

function App() {
  return (
    <Switch data-test="app">
      <Route path={routes.HOME} exact component={Home} />
      <Route path={routes.BRAINSTORMING} component={Brainstorming} />
      <Redirect to={routes.HOME} />
    </Switch>
  );
}

export default App;
