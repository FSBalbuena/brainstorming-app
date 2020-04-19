import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';

const ModalForm = ({ header, cancel, create, children }) => (
  <Modal open={true} size="small" data-test="modal">
    <Modal.Header data-test="header">{header}</Modal.Header>
    <Modal.Content>{children}</Modal.Content>
    <Modal.Actions>
      <Button {...cancel} data-test="cancel" />
      <Button {...create} data-test="create" />
    </Modal.Actions>
  </Modal>
);

ModalForm.defaultProps = {
  header: 'New Brainstorming',
  cancel: {},
  create: {},
};

ModalForm.propTypes = {
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
