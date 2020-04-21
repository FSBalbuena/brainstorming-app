import React from 'react';
import BrainstormingHeader from './components/Header';
import { Container, Divider } from 'semantic-ui-react';
import styles from 'components/Brainstorming/Session/styles';

const Session = ({ session }) => {
  return (
    <Container style={styles.container}>
      <BrainstormingHeader {...session} />
      <Divider />
    </Container>
  );
};

export default Session;
