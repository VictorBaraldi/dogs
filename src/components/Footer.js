import React from 'react';
import styles from '../styles/Footer.module.css';
import { ReactComponent as FooterImg } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterImg />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
