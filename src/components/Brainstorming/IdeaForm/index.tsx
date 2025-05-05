import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Popup } from 'semantic-ui-react';
import styles from '@/components/Brainstorming/brainstorming.module.scss';

const IdeaForm = ({
  value,
  handleSubmit,
  handleChange,
  defaultOpen = true,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const handleClose = () => setOpen(false);
  const handleEnter = e => (e.keyCode == 13 ? handleSubmit(e) : null);
  const popupMessage = 'Add ideas from here!';
  const formLabel = 'Add a new idea';
  const placeholder = 'This idea will solve the problem...';
  const buttonText = 'Add';
  return (
    <div className={styles.ideaFormBox} onKeyDown={handleEnter}>
      <Popup
        open={open}
        size="huge"
        content={popupMessage}
        onClose={handleClose}
        trigger={
          <Form
            className={styles.ideaForm}
            data-test="form"
            onSubmit={handleSubmit}
          >
            <Form.TextArea
              label={formLabel}
              data-test="text-area"
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            />
            <Button type="submit" floated="right" color="teal">
              {buttonText}
            </Button>
          </Form>
        }
      />
    </div>
  );
};

IdeaForm.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  defaultOpen: PropTypes.bool,
};

export default IdeaForm;
