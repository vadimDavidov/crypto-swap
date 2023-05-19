'use client';
import styles from './MobileFooter.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function MobileFooter() {
  const [isFocused, setIsfocused] = useState(false);
  const [focusColor, setFocusColor] = useState('');

  const changeColor = () => {
    const color = '#40a5f3';
    setFocusColor(color);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <nav>
          <div className={styles.innerBox}>
            <Link href={'#'}>
              <Image
                width={32}
                height={32}
                src="/icons/clockwise-focus.svg"
                alt="clockwise"
              />
            </Link>
          </div>
          <div className={styles.innerBox}>
            <Link href={'#'}>
              <Image
                width={32}
                height={32}
                src="/icons/question.svg"
                alt="question"
              />
            </Link>
          </div>
          <div className={styles.innerBox}>
            <Link href={'#'}>
              <Image
                width={32}
                height={32}
                src={'/icons/document.svg'}
                alt="document"
              />
            </Link>
          </div>
          <div className={styles.innerBox}>
            <Link href={'#'}>
              <Image
                width={32}
                height={32}
                src={'/icons/answer.svg'}
                alt="answer"
              />
            </Link>
          </div>
          <div className={styles.innerBox}>
            <Link href={'#'}>
              <Image
                width={32}
                height={32}
                src={'/icons/lang-footer.svg'}
                alt="language"
              />
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileFooter;
