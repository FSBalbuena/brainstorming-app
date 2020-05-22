import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Popup } from 'semantic-ui-react';
import styles from '../styles';

const IdeaForm = ({ value, handleSubmit, handleChange }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const handleEnter = e => (e.keyCode == 13 ? handleSubmit(e) : null);

  return (
    <div style={styles.ideaFormBox} onKeyDown={handleEnter}>
      <Popup
        open={open}
        size="huge"
        content="Agrega ideas a la tabla desde aqui!"
        onClose={handleClose}
        trigger={
          <Form style={styles.ideaForm} onSubmit={handleSubmit}>
            <Form.TextArea
              label="Añade una idea"
              placeholder="Una idea loca"
              value={value}
              onChange={handleChange}
            />
            <Button type="submit" floated="right" color="teal">
              Añadir
            </Button>
          </Form>
        }
      />
    </div>
  );
};

IdeaForm.propTypes = {
  value: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default IdeaForm;
