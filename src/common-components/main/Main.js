'use client';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Link from 'next/link';
import Image from 'next/image';
import CrygBlock from './CrygBlock';
import DelBlock from './DelBlock';
import Button from '@/shared-components/Button';
import getScreenStatus from '@/utils/getScreenStatus';

function MainBlock() {
  const rate = 714.543;
  const [crygState, setCrygState] = useState(1);
  const [delState, setDelState] = useState(() => parseFloat(crygState) * rate);

  const changeCrygState = event => {
    setCrygState(event.target.value);
  };

  useEffect(() => {
    let del = (parseFloat(crygState).toFixed(3) * rate).toString();
    setDelState(del);
  }, [crygState]);

  const mobile = getScreenStatus(800);

  return (
    <div className={styles.wrapper}>
      <section className={styles.main}>
        <nav>
          <Link href={'#'}>Swap</Link>
          <Link href={'#'}>Pool</Link>
        </nav>
        <div className={`${styles.actionBlock} ${styles.first}`}>
          <CrygBlock onChange={changeCrygState} value={crygState} />
        </div>
        <div className={`${styles.actionBlock} ${styles.second}`}>
          <DelBlock value={delState} />
        </div>

        <div className={styles.info}>
          <Image
            width={20}
            height={20}
            src={'/icons/info.svg'}
            alt="info-img"
          />
          <div>
            1 CRYG = 714.543 DEL <span>($331.42)</span>
          </div>
        </div>
        <div className={styles.centralBtn}>
          <Button>
            <Image width={18} height={18} src={'/icons/case.svg'} alt="case" />
            <span>Сonnect walley</span>
          </Button>
        </div>
        <div className={styles.arrowButton}>
          <button>
            <Image
              width={!mobile ? 49 : 32}
              height={!mobile ? 49 : 32}
              src={'/images/arrow-button.png'}
              alt="arrow-button"
            />
          </button>
        </div>
      </section>
    </div>
  );
}

export default MainBlock;
