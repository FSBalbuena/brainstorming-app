import React from 'react';
import { Step } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SessionSteps = ({ steps }) => {
  return (
    <Step.Group ordered fluid data-test="session-step-group">
      {steps.map(({ title, description, ...rest }) => (
        <Step {...rest} key={title} data-test="session-step">
          <Step.Content>
            <Step.Title>{title}</Step.Title>
            {description && <Step.Description>{description}</Step.Description>}
          </Step.Content>
        </Step>
      ))}
    </Step.Group>
  );
};

SessionSteps.defaultProps = {
  steps: [],
};

SessionSteps.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      active: PropTypes.bool,
      completed: PropTypes.bool,
      disable: PropTypes.bool,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default SessionSteps;
