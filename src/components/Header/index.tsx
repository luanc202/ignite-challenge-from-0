import { ReactElement } from 'react';
import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <div className={styles.logoImage}>
      <a href="/">
        <img src="/images/logo-with-text.svg" alt="logo" />
      </a>
    </div>
  );
}
