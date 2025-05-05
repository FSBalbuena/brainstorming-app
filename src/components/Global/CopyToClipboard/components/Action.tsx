import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Button, Icon } from 'semantic-ui-react';

const Action = ({ open = false, onClick = () => {} }) => (
  <Popup
    content="Copied!"
    open={open}
    trigger={
      <Button color={'teal'} icon labelPosition="right" onClick={onClick}>
        {'Copy'}
        <Icon name="copy" />
      </Button>
    }
  />
);

Action.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Action;
