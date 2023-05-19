import styles from './LeftNavBar.module.css';
import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function LeftNavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoGroup}>
        <Link href="/">
          <span>
            <Image width={32} height={32} src="/icons/logo.svg" alt="logo" />
          </span>
          <span>Canyon Swap</span>
        </Link>
      </div>
      <nav>
        <Link href="#" autoFocus={true}>
          Главная
        </Link>
        <Link href="#">Лендинг</Link>
        <Link href="#">FAQ</Link>
        <Link href="#">Обратная связь</Link>
      </nav>
    </div>
  );
}

export default LeftNavBar;
