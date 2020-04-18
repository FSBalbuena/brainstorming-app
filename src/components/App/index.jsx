import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Home, Brainstorming } from 'views';
function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/brainstorming" exact component={Brainstorming} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
