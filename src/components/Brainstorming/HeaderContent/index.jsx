import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import styles from 'components/Brainstorming/styles';

const HeaderContent = ({ sessionTitle, goal }) => (
  <>
    <Header data-test="session-title" as="h1" style={styles.title}>
      {sessionTitle}
    </Header>
    <Header data-test="session-goal" as="h3" style={styles.goal}>
      {goal}
    </Header>
  </>
);

HeaderContent.defaultProps = {
  sessionTitle: 'Brainstorming',
  goal: 'This is your Goal',
};

HeaderContent.propTypes = {
  sessionTitle: PropTypes.string,
  goal: PropTypes.string,
};

export default HeaderContent;
