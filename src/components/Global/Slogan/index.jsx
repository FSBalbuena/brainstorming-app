import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styles from 'components/Global/home.module.scss';

const Slogan = ({ handleButton }) => {
  return (
    <>
      <Header
        content="Empowering creative processes"
        size="huge"
        className={styles.title}
      />
      <Header
        content="Easy, free, and collaborative Brainstorming sessions. "
        size="large"
        className={styles.subTitle}
      />
      <div className={styles.sloganButtonGroup}>
        <Button
          content="Start now!"
          size="big"
          color={'teal'}
          onClick={handleButton}
        />
        {/*
        <Button
          content="Quick demo"
          size="big"
          className={styles.secondaryButton}
        />
        */}
      </div>
    </>
  );
};

Slogan.defaultProps = {
  handleButton: () => {},
};

Slogan.propTypes = {
  handleButton: PropTypes.func,
};

export default Slogan;
