import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Brainstorming } from 'views';

function App() {
  return (
    <Switch data-test="app">
      <Route path="/" exact component={Brainstorming} />
      <Route path="/brainstorming" exact component={Brainstorming} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
