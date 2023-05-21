'use client';
import styles from './MobileFooter.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { svgIcons } from '@/utils-data/svgIcons';
import { createRef, useEffect, useRef, useState } from 'react';

function MobileFooter() {
  const icons = svgIcons();
  const [clockwiseFocus, setClockwiseFocus] = useState(true);
  const [questionFocus, setQuesyionFocus] = useState(false);
  const [documentFocus, setDocumentFocus] = useState(false);
  const [answerFocus, setAnswerFocus] = useState(false);
  const [languageFocus, setLanguageFocus] = useState(false);

  const handleClockwiseFocus = () => {
    setClockwiseFocus(true);
    setAnswerFocus(false);
    setDocumentFocus(false);
    setLanguageFocus(false);
    setQuesyionFocus(false);
  };
  const handleQuestionFocus = () => {
    setClockwiseFocus(false);
    setAnswerFocus(false);
    setDocumentFocus(false);
    setLanguageFocus(false);
    setQuesyionFocus(true);
  };
  const handleDocumentFocus = () => {
    setClockwiseFocus(false);
    setAnswerFocus(false);
    setDocumentFocus(true);
    setLanguageFocus(false);
    setQuesyionFocus(false);
  };
  const handleAnswerFocus = () => {
    setClockwiseFocus(false);
    setAnswerFocus(true);
    setDocumentFocus(false);
    setLanguageFocus(false);
    setQuesyionFocus(false);
  };
  const handleLanguageFocus = () => {
    setClockwiseFocus(false);
    setAnswerFocus(false);
    setDocumentFocus(false);
    setLanguageFocus(true);
    setQuesyionFocus(false);
  };

  console.log(clockwiseFocus);
  console.log(questionFocus);
  console.log(documentFocus);
  console.log(answerFocus);
  console.log(languageFocus);

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <nav>
          <div
            tabIndex={1}
            className={`${styles.innerBox} ${styles.clockwise}`}
          >
            <Link onClick={() => handleClockwiseFocus()} href={'#'}>
              <Image
                className={styles.ellipseOne}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  clockwiseFocus
                    ? '/icons/ellipse-focus.svg'
                    : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/clockwise.svg"
                src={clockwiseFocus ? icons[0].focusPath : icons[0].path}
                alt="clockwise"
              />
            </Link>
          </div>
          <div tabIndex={2} className={`${styles.innerBox} ${styles.question}`}>
            <Link onClick={() => handleQuestionFocus()} href={'#'}>
              <Image
                className={styles.ellipseTwo}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  questionFocus
                    ? '/icons/ellipse-focus.svg'
                    : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/question.svg"
                src={questionFocus ? icons[1].focusPath : icons[1].path}
                alt="question"
              />
            </Link>
          </div>
          <div tabIndex={3} className={`${styles.innerBox} ${styles.document}`}>
            <Link onClick={() => handleDocumentFocus()} href={'#'}>
              <Image
                className={styles.ellipseThree}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  documentFocus
                    ? '/icons/ellipse-focus.svg'
                    : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/document.svg"
                src={documentFocus ? icons[2].focusPath : icons[2].path}
                alt="document"
              />
            </Link>
          </div>
          <div tabIndex={4} className={`${styles.innerBox} ${styles.answer}`}>
            <Link onClick={() => handleAnswerFocus()} href={'#'}>
              <Image
                className={styles.ellipseFour}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  answerFocus
                    ? '/icons/ellipse-focus.svg'
                    : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/answer.svg"
                src={answerFocus ? icons[3].focusPath : icons[3].path}
                alt="answer"
              />
            </Link>
          </div>
          <div tabIndex={5} className={`${styles.innerBox} ${styles.language}`}>
            <Link onClick={() => handleLanguageFocus()} href={'#'}>
              <Image
                className={styles.ellipseFive}
                width={6}
                height={6}
                // src="/icons/ellipse.svg"
                src={
                  languageFocus
                    ? '/icons/ellipse-focus.svg'
                    : '/icons/ellipse.svg'
                }
                alt="ellipse"
              />
              <Image
                width={32}
                height={32}
                // src="/icons/lang-footer.svg"
                src={languageFocus ? icons[4].focusPath : icons[4].path}
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
