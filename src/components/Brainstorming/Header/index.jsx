import React from 'react';
import PropTypes from 'prop-types';

import adminImage from '@/assets/brainstorming.png';
import { Grid } from 'semantic-ui-react';
import styles from '@/components/Brainstorming/brainstorming.module.scss';
import { AdminBox, HeaderContent } from '@/components/Brainstorming';
import { CopyToClipboard } from '@/components/Global';

const Header = ({ admin, title, url, goal }) => {
  return (
    <Grid
      divided="vertically"
      data-test="header"
      className={styles.headerContainer}
      stackable
    >
      <Grid.Row columns={2}>
        <Grid.Column>
          <AdminBox name={admin} image={adminImage} />
          <HeaderContent title={title} goal={goal} />
        </Grid.Column>
        <Grid.Column className={styles.copyBox} data-test="session-url">
          <CopyToClipboard url={url} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

Header.defaultProps = {};

Header.propTypes = {
  admin: PropTypes.string,
  title: PropTypes.string,
  goal: PropTypes.string,
  url: PropTypes.string,
};

export default Header;
