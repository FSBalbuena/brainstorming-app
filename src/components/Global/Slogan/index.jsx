import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import styles from 'components/Global/home.module.scss';

const Slogan = () => {
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
        <Button content="Start now!" size="big" color={'teal'} />
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

export default Slogan;
