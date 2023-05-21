'use client';
import styles from './MobileFooter.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { svgIcons } from '@/utils-data/svgIcons';
import { createRef, useEffect, useRef, useState } from 'react';

function MobileFooter() {
  const icons = svgIcons();
  const clockwiseRef = createRef();
  const questionRef = createRef();
  const documentRef = createRef();
  const answerRef = createRef();
  const languageRef = createRef();
  const ellipseRef = createRef();
  const [hasFocus, setHasFocus] = useState(false);

  // useEffect(() => {
  //   if (document.hasFocus() && ref.current.contains(document.activeElement)) {
  //     setHasFocus(true);
  //   }
  // }, [hasFocus]);

  // useEffect(() => {
  //   if (document.activeElement === clockwiseRef.current) {
  //     setHasFocus(true);
  //   }
  //   if (document.activeElement !== clockwiseRef.current) {
  //     setHasFocus(false);
  //   }

  //   if (document.activeElement === questionRef.current) {
  //     setHasFocus(true);
  //   }
  //   if (document.activeElement !== questionRef.current) {
  //     setHasFocus(false);
  //   }

  //   if (document.activeElement === documentRef.current) {
  //     setHasFocus(true);
  //   }
  //   if (document.activeElement !== documentRef.current) {
  //     setHasFocus(false);
  //   }
  //   if (document.activeElement === languageRef.current) {
  //     setHasFocus(true);
  //   }
  //   if (document.activeElement !== languageRef.current) {
  //     setHasFocus(false);
  //   }
  // }, [
  //   hasFocus,
  //   clockwiseRef,
  //   questionRef,
  //   documentRef,
  //   answerRef,
  //   languageRef,
  // ]);

  console.log(hasFocus);

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <nav>
          <div className={`${styles.innerBox} ${styles.clockwise}`}>
            <Link
              onClick={() => clockwiseRef.current}
              ref={useRef(clockwiseRef.current)}
              href={'#'}
            >
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  hasFocus ? '/icons/ellipse-focus.svg' : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/clockwise.svg"
                src={hasFocus ? icons[0].focusPath : icons[0].path}
                alt="clockwise"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.question}`}>
            <Link
              onClick={() => questionRef.current}
              ref={useRef(questionRef.current)}
              href={'#'}
            >
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  hasFocus ? '/icons/ellipse-focus.svg' : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/question.svg"
                src={hasFocus ? icons[1].focusPath : icons[1].path}
                alt="question"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.document}`}>
            <Link
              onClick={() => documentRef.current}
              ref={useRef(documentRef.current)}
              href={'#'}
            >
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  hasFocus ? '/icons/ellipse-focus.svg' : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/document.svg"
                src={hasFocus ? icons[2].focusPath : icons[2].path}
                alt="document"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.answer}`}>
            <Link
              onClick={() => answerRef.current}
              ref={useRef(answerRef.current)}
              href={'#'}
            >
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  hasFocus ? '/icons/ellipse-focus.svg' : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/answer.svg"
                src={hasFocus ? icons[3].focusPath : icons[3].path}
                alt="answer"
              />
            </Link>
          </div>
          <div className={`${styles.innerBox} ${styles.language}`}>
            <Link
              onClick={() => languageRef.current}
              ref={useRef(languageRef.current)}
              href={'#'}
            >
              <Image
                className={styles.ellipse}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  hasFocus ? '/icons/ellipse-focus.svg' : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/lang-footer.svg"
                src={hasFocus ? icons[4].focusPath : icons[4].path}
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
