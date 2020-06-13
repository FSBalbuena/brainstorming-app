import React from 'react';
import styles from 'components/Home/home.module.scss';
import homeImage from 'assets/home-image.svg';

const Home = ({ title, subTitle, buttonText, handleButton }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.subTitle}>{subTitle}</h1>
        <button className={styles.startButton} onClick={handleButton}>
          {buttonText}
        </button>
      </div>
      <img src={homeImage} className={styles.homeImage} />
    </div>
  );
};

export default Home;
