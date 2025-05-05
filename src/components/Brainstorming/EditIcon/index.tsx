import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import styles from '@/components/Brainstorming/brainstorming.module.scss';

const EditIcon = ({ canRate = false, ...rest }) => {
  return (
    <Icon
      disabled={!canRate}
      name="pencil"
      {...rest}
      className={canRate && styles.editIcon}
    />
  );
};

EditIcon.propTypes = {
  canRate: PropTypes.bool,
};
export default EditIcon;
