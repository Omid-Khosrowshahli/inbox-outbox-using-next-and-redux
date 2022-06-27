import { useRouter } from "next/router";
import { FC } from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from './MessageList.module.css';

const MessageList: FC = () => {
  const {messageList} = useSelector<any, any>((state) => {
    return state.messages;
  })

  const router = useRouter();
  const {query} = router;
  
  return (
    <MainLayout>
      <div className={styles.messages}>
        <div className={styles.list}>
          <p>Inbox</p>
          <ul>
            {messageList.filter((item: any) => (
              item.to === query.messages
            )).map((filteredItem: any) => (
              <li>
                <div className={styles.insideLi}>
                  <span>{filteredItem.message}</span>
                  <span style={{fontStyle: 'italic', color: '#999'}}>From {filteredItem.from}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.list}>
          <p>Sent</p>
          <ul>
            {messageList.filter((item: any) => (
              item.from === query.messages
            )).map((filteredItem: any) => (
              <li>
                <div className={styles.insideLi}>
                  <span>{filteredItem.message}</span>
                  <span style={{fontStyle: 'italic', color: '#999'}}>To {filteredItem.to}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default MessageList;