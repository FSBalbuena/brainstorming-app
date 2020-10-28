import React from 'react';
import { Image } from 'semantic-ui-react';
import footerLogo from 'assets/footer-logo.png';
import styles from 'components/Global/global.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <Image src={footerLogo} size="small" />
    </div>
  );
};

export default Footer;
