import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';

const AdminBox = ({ name = 'John Doe', subtitle = 'Admin', image = '' }) => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content>
        <Feed.Summary data-test="session-admin-name">{name}</Feed.Summary>
        <Feed.Meta>{subtitle}</Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);

AdminBox.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

export default AdminBox;
