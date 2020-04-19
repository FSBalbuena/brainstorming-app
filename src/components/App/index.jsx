import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home, Brainstorming } from 'views';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Switch data-test="app">
      <Route path="/" exact component={Home} />
      <Route path="/brainstorming" exact component={Brainstorming} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
