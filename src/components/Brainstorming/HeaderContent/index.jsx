import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styles from '@/components/Brainstorming/brainstorming.module.scss';

const HeaderContent = ({ title, goal }) => (
  <>
    <Header data-test="session-title" as="h1" className={styles.title}>
      {title}
    </Header>
    <Header data-test="session-goal" as="h3" className={styles.goal}>
      {goal}
    </Header>
  </>
);

HeaderContent.defaultProps = {
  title: 'Brainstorming',
  goal: 'This is your Goal',
};

HeaderContent.propTypes = {
  title: PropTypes.string,
  goal: PropTypes.string,
};

export default HeaderContent;
