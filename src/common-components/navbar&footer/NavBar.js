import styles from './NavBar.module.css';
import DesctopNavBar from './DesctopNavBar';
import MobileNavBar from './MobileNavBar';

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.left}>
        <DesctopNavBar />
      </section>
      <section className={styles.right}>
        <MobileNavBar />
      </section>
    </div>
  );
}

export default NavBar;
