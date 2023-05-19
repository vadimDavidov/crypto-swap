import styles from './NavBar.module.css';
import LeftTopBar from './LeftNavBar';
import RightTopBar from './RightNavBar';

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.left}>
        <LeftTopBar />
      </section>
      <section className={styles.right}>
        <RightTopBar />
      </section>
    </div>
  );
}

export default NavBar;
