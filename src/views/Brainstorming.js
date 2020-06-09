import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import * as routes from 'data/routes';

import { setId } from 'store/actions/auth';
import { useDispatch } from 'react-redux';

import { SessionContainer } from 'containers/Brainstorming';
import { NewBrainstorming } from 'containers';

const Brainstorming = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setId());
  }, []);

  return (
    <Switch>
      <Route
        path={`${routes.BRAINSTORMING}`}
        exact
        component={NewBrainstorming}
      />
      <Route
        path={`${routes.BRAINSTORMING}/:id`}
        exact
        component={SessionContainer}
      />
      <Redirect to={routes.HOME} />
    </Switch>
  );
};

export default Brainstorming;
