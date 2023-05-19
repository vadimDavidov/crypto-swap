import styles from './Button.module.css';

function Button(props) {
  return <button className={styles.centralBtn}>{props.children}</button>;
}

export default Button;
