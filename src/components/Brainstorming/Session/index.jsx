import React from 'react';
import { Container } from 'semantic-ui-react';
import styles from 'components/Brainstorming/brainstorming.module.scss';
import PropTypes from 'prop-types';

const Session = ({ children }) => {
  return <Container className={styles.container}>{children}</Container>;
};

Session.propTypes = {
  children: PropTypes.element,
};

export default Session;
