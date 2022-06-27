import { InfoCircleTwoTone } from "@ant-design/icons";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../../Redux/modalSlice";
import { currentUserUpdate } from "../../../Redux/userSlice";
import InfoModal from "../../components/infoModal/infoModal";
import Button from "../../sharedUi/Button/Button";
import Input from "../../sharedUi/Input/Input";
import styles from './LoginTemplate.module.css';

const LoginTemplate: FC = () => {
  const [info, setInfo] = useState({userName: '', password: ''});

  const userList = useSelector<any, any>((state) => {
    return state.user.userList;
  });

  const isModalVisible = useSelector<any, any>((state) => {
    return state.modal.isModalVisible;
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const loginHandler = (): void => {
    const current = userList.find((item: any) => item.userName === info.userName && item.password === info.password)
    if(current) {
      dispatch(currentUserUpdate(current));
      router.replace(current.isAdmin ? '/admin' : 'user'); 
    }
    else {
      alert('You are not an authorised person!');
    }

    setInfo({userName: '', password: ''});
  }

  const openModal = (): void => {
    dispatch(setIsModalVisible(true));
  }
  
  return (
    <div className={styles.loginTemplate}>
      <span style={{fontSize: 40, cursor: 'pointer'}} onClick={openModal}>
        <InfoCircleTwoTone />
      </span>
      <InfoModal isModalVisible={isModalVisible}>
        <ul>
          <li>Admins can add users. The new users can be declared as admin.</li>
          <li>Admins can select any user and see their inbox and outbox and to whom they have sent messages.</li>
          <li>Users can select any other user and send them messages.</li>
          <li>Default admin's username and password is <strong>'admin'</strong>.</li>
        </ul>
      </InfoModal>
      <Input
        type='text'
        placeholder="Username..." 
        value={info.userName}
        onChange={(event: any) => setInfo({...info, userName: event.target.value})}
      />
      <Input 
        type='password' 
        placeholder="Password..."
        value={info.password} 
        onChange={(event: any) => setInfo({...info, password: event.target.value})}
      />
      <Button onClick={loginHandler}>Login</Button>
    </div>
  );
};

export default LoginTemplate;