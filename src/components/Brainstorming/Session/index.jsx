import React from 'react';
import { Container } from 'semantic-ui-react';
import styles from 'components/Brainstorming/styles';
import PropTypes from 'prop-types';

const Session = ({ children }) => {
  return <Container style={styles.container}>{children}</Container>;
};

Session.propTypes = {
  children: PropTypes.element,
};

export default Session;
