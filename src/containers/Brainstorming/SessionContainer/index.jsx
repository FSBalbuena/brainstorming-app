import React, { useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSession } from '@/store/actions/brainstorming';
import { Session } from '@/components/Brainstorming';
import {
  HeaderContainer,
  StepsContainer,
  StepViewsContainer,
} from '@/containers/Brainstorming';

const SessionContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { data: session } = useSelector(state => state.brainstorming);
  useEffect(() => {
    const url = window.location.href;
    dispatch(getSession(match.params.id, url));
  }, [dispatch, match.params.id]);
  return (
    <Session>
      <HeaderContainer />
      <Divider />
      <StepsContainer />
      <StepViewsContainer currentStep={session.step} />
    </Session>
  );
};

SessionContainer.propTypes = {
  match: PropTypes.object,
};

const RoutedSessionContainer = withRouter(SessionContainer);

export default RoutedSessionContainer;
