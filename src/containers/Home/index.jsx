import React from 'react';
import { withRouter } from 'react-router-dom';

import Home from 'components/Home';
import * as routes from 'data/routes';

const HomeContainer = ({ history }) => {
  const handleButton = () => {
    history.push(routes.BRAINSTORMING);
  };
  const homeProps = {
    title: 'Empowering creative processes',
    subTitle: 'Easy, free, and collaborative Brainstorming sessions.',
    buttonText: 'Start Now!',
    handleButton,
  };

  return <Home {...homeProps} />;
};

export default withRouter(HomeContainer);
