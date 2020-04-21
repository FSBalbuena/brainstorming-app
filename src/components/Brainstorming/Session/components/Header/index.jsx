import React from 'react';
import PropTypes from 'prop-types';
import adminImage from 'assets/brainstorming.png';
import { Header, Grid } from 'semantic-ui-react';
import styles from 'components/Brainstorming/Session/styles';
import CopyToClipboard from 'components/CopyToClipboard';
import AdminBox from './components/AdminBox';

const BrainstormingHeader = ({ admin, sessionTitle, goal, url }) => (
  <Grid divided="vertically" data-test="header" style={styles.headerContainer}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <AdminBox name={admin} image={adminImage} />
        <Header data-test="session-title" as="h1" style={styles.title}>
          {sessionTitle}
        </Header>
        <Header data-test="session-goal" as="h3" style={styles.goal}>
          {goal}
        </Header>
      </Grid.Column>
      <Grid.Column style={styles.copyBox} data-test="session-url">
        <CopyToClipboard url={url} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

BrainstormingHeader.defaultProps = {
  admin: 'John Doe',
  sessionTitle: 'Brainstorming session`s title',
  goal: 'This session will help you to find solutions',
  url: 'https...',
};

BrainstormingHeader.propTypes = {
  admin: PropTypes.string.isRequired,
  sessionTitle: PropTypes.string.isRequired,
  goal: PropTypes.string,
  url: PropTypes.string,
};

export default BrainstormingHeader;
