import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../../Redux/userSlice";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Button from "../../sharedUi/Button/Button";
import Input from "../../sharedUi/Input/Input";
import styles from './AddUserTemplate.module.css';
import { Switch } from 'antd';

const AddUserTemplate = () => {
  const [info, setInfo] = useState({userName: '', password: '', isAdmin: false});

  const router = useRouter();

  const {userList} = useSelector<any, any>((state) => {
    return state.user;
  });

  const dispatch = useDispatch();

  const handleAdd = (): void => {
    if (info.userName && info.password) {
      dispatch(addUser(info));
    }
  };

  const handleCheckBox = (e: boolean): void => {
    setInfo({...info, isAdmin: e});
  };

  const goToUserMessages = (username: string): void => {
    router.push(`/admin/${username}`);
  }

  return (
    <MainLayout>
      <div className={styles.admin}>
        <div className={styles.addUser}>
          <p>Add new user</p>
          <Input
            type='text' 
            onChange={(event: any) => setInfo({...info, userName: event.target.value})}
            placeholder='Username...'
          />
          <Input
            type='password'
            onChange={(event: any) => setInfo({...info, password: event.target.value})}
            placeholder='Password...'
          />
          <div className={styles.isAdmin}>
            <span style={{color: 'white', fontSize: 16, fontWeight: 600}}>Admin</span>
            <Switch onChange={(checked: boolean) => handleCheckBox(checked)} />
          </div>
          <Button onClick={handleAdd}>Add</Button>
        </div>
        <ul className={styles.userList}>
          {userList.map((item: any) => (
            <li onClick={() => goToUserMessages(item.userName)}>
              <div className={styles.insideLi}>
                <span>{item.userName}</span>
                {item.isAdmin && <span style={{color: 'red', fontStyle: 'italic', fontWeight: 400}}>admin</span>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default AddUserTemplate;