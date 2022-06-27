import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <p>Login</p>
    </header>
  );
}

export default Header;

