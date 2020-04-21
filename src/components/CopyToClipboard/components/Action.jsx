import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Button, Icon } from 'semantic-ui-react';

const Action = ({ open, onClick }) => (
  <Popup
    content="Copied!"
    open={open}
    data-test="copy-button"
    trigger={
      <Button color={'teal'} icon labelPosition="right" onClick={onClick}>
        {'Copy'}
        <Icon name="copy" />
      </Button>
    }
  />
);

Action.defaultProps = {
  open: false,
  onClick: () => {},
};

Action.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Action;
