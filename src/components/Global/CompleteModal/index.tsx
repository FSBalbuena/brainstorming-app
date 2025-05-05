import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';

const ModalForm = ({
  header = 'New Brainstorming',
  open = true,
  cancel = {},
  create = {},
  children,
  ...rest
}) => (
  <Modal {...rest} open={open} size="small" data-testid="modal">
    <Modal.Header>{header}</Modal.Header>
    <Modal.Content>{children}</Modal.Content>
    <Modal.Actions>
      <Button {...cancel} />
      <Button {...create} />
    </Modal.Actions>
  </Modal>
);

ModalForm.propTypes = {
  open: PropTypes.bool,
  header: PropTypes.string,
  cancel: PropTypes.shape({
    content: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }),
  create: PropTypes.shape({
    content: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }),
  children: PropTypes.node,
};

export default ModalForm;
