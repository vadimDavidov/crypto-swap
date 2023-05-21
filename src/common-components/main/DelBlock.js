import styles from './DelBlock.module.css';
import Image from 'next/image';

function DelBlock({ value }) {
  return (
    <div className={styles.del}>
      <p>Вы покупаете</p>
      <div className={styles.delMiddle}>
        <div className={styles.delGroup}>
          <Image width={36} height={36} src={'/images/del.png'} alt="del-img" />
          <span>DEL</span>
          <Image
            width={14}
            height={14}
            src={'/icons/angle-down.svg'}
            alt="angle-down"
          />
        </div>
        <span className={styles.delAmmount}>{!value ? 0 : value}</span>
      </div>
      <div className={styles.delBottom}>
        <span>CRYG</span>
        <span>-~$331.62 (-0.63%)</span>
      </div>
    </div>
  );
}

export default DelBlock;
