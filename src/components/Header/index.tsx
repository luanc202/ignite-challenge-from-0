import { ReactElement } from 'react';
import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <div className={styles.logoImage}>
      <img src="/images/logo-with-text.svg" alt="" />
    </div>
  );
}
