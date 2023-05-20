'use client';
import styles from './MobileFooter.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { svgIcons } from '@/utils-data/svgIcons';

function MobileFooter() {
  const icons = svgIcons();
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <nav>
          <div className={`${styles.innerBox} ${styles.clockwise}`}>
            <Link href={'#'}>
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                src="/icons/ellipse.svg"
                // src={
                //   FocusEvent ? '/icons/ellipse-focus.svg' : '/icons/ellipse.svg'
                // }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                src="/icons/clockwise.svg"
                // src={FocusEvent ? icons[0].focusPath : icons[0].path}
                alt="clockwise"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.question}`}>
            <Link href={'#'}>
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                src="/icons/ellipse.svg"
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                src="/icons/question.svg"
                // src={FocusEvent ? icons[1].focusPath : icons[1].path}
                alt="question"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.document}`}>
            <Link href={'#'}>
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                src="/icons/ellipse.svg"
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                src="/icons/document.svg"
                // src={FocusEvent ? icons[2].focusPath : icons[2].path}
                alt="document"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.answer}`}>
            <Link href={'#'}>
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                src="/icons/ellipse.svg"
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                src="/icons/answer.svg"
                // src={FocusEvent ? icons[3].focusPath : icons[3].path}
                alt="answer"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.language}`}>
            <Link href={'#'}>
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                src="/icons/ellipse.svg"
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                src="/icons/lang-footer.svg"
                // src={FocusEvent ? icons[4].focusPath : icons[4].path}
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
