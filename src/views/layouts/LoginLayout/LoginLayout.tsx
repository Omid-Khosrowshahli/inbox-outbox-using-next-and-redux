import type { FC, ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from './LoginLayout.module.css';

interface ILoginLayoutProps {
  children: ReactNode
}

const LoginLayout: FC<ILoginLayoutProps> = ({ children }) => {
  return (
    <div className={styles.loginLayout}>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default LoginLayout;