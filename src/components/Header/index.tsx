import Link from 'next/link';
import { ReactElement } from 'react';
import styles from './header.module.scss';

export default function Header(): ReactElement {
  return (
    <div className={styles.logoImage}>
      <Link href="/">
        <img src="/imLinkges/logo-with-text.svg" alt="logo" />
      </Link>
    </div>
  );
}
