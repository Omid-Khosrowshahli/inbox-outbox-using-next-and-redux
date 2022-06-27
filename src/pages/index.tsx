import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import LoginLayout from '../views/layouts/LoginLayout/LoginLayout';
import LoginTemplate from '../views/templates/LoginTemplate/LoginTemplate';
import 'antd/dist/antd.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LoginLayout>
        <LoginTemplate />
      </LoginLayout>
    </div>
  )
}

export default Home;
