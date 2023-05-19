import styles from './DescTopFooter.module.css';
import Link from 'next/link';

function DescTopFooter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        Copyright. @ 2023 Corp Name Все права защищены
      </div>
      <div className={styles.right}>
        <Link href={'#'}>Пользовательское соглашение</Link>
        <div className={styles.separator}></div>
        <Link href={'#'}>Политика конфиденциальности</Link>
      </div>
    </div>
  );
}

export default DescTopFooter;
