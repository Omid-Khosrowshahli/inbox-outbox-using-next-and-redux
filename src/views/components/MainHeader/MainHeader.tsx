import { useRouter } from 'next/router';
import { FC } from 'react';
import Button from '../../sharedUi/Button/Button';
import styles from './MainHeader.module.css';

const MainHeader: FC = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/');
  };

  return (
    <header className={styles.MainHeader}>
      <Button style={{borderRadius: 0}} onClick={goToLogin}>Go to Login Page</Button>
    </header>
  );
}

export default MainHeader;
