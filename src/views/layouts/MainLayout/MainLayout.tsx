import type { FC, ReactNode } from "react";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/MainHeader/MainHeader";
import styles from './MainLayout.module.css';

interface IMainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <MainHeader />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout;