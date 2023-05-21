'use client';
import styles from './MobileNavBar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function MobileNavBar() {
  const [isShowLanguages, setIsShowLanguages] = useState(false);

  const toggleShowLanguages = () => setIsShowLanguages(prev => !prev);

  return (
    <div className={styles.wrapper}>
      <div className={styles.languagesContainer}>
        <div onClick={toggleShowLanguages} className={styles.switch}>
          <Image
            width={18}
            height={18}
            src={'/icons/language.svg'}
            alt="language-img"
          />
          <span>RU</span>
          <Image
            className={isShowLanguages ? 'expand' : ''}
            width={10}
            height={10}
            src={'/icons/angle-down.svg'}
            alt="angle-down"
          />
        </div>
        {isShowLanguages && (
          <div className={styles.languages}>
            <Link href={'#'} autoFocus={true}>
              RU
            </Link>
            <Link href={'#'}>ENG</Link>
          </div>
        )}
      </div>

      <div className={styles.switch}>
        <Image width={18} height={18} src={'/images/nav.png'} alt="nav-img" />
        <span>Decimal</span>
      </div>
      <div className={styles.switch}>
        <Image width={18} height={18} src={'/icons/case.svg'} alt="case" />
        <span>Connect wallet</span>
      </div>
    </div>
  );
}

export default MobileNavBar;
