import styles from './CrygBlock.module.css';
import Image from 'next/image';

function CrygBlock({ onChange, value }) {
  return (
    <div className={styles.cryg}>
      <p>Вы продаете</p>

      <div className={styles.crygMiddle}>
        <div className={styles.crygGroup}>
          <Image
            width={33}
            height={36}
            src={'/images/cryg.png'}
            alt="cryg-img"
          />
          <span>CRYG</span>
          <Image
            width={14}
            height={14}
            src={'/icons/angle-down.svg'}
            alt="angle-down"
          />
        </div>
        <input
          onChange={onChange}
          className={styles.crygAmmount}
          value={value}
        />
      </div>
      <div className={styles.crygBottom}>
        <span>CRYG</span>
        <span>-$333.73</span>
      </div>
    </div>
  );
}

export default CrygBlock;
