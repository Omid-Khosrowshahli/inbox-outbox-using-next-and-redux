import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToMessageList } from "../../../Redux/messageSlice";
import Button from "../../sharedUi/Button/Button";
import Select from "../../sharedUi/Select/Select";
import TextArea from "../../sharedUi/TextArea/TextArea";
import styles from './SendMessageTemplate.module.css';

const SendMessageTemplate: FC = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const {userList, currentUser} = useSelector<any, any>((state) => {
    return state.user;
  });

  const handleSubmitMessage = () => {
    dispatch(AddToMessageList({message: message, to: recipient, from: currentUser.userName}));
  };

  return (
    <div className={styles.send}>
      <Select
        className={styles.selection}
        onChange={(event: any) => setRecipient(event.target.value)}
      >
        <option selected disabled>Send a amessage to:</option>
        {userList.filter((filteredItems: any) =>
          (filteredItems.userName !== currentUser.userName)).map((item: any) =>
          <option>{item.userName}</option>)
        }
      </Select>
      <TextArea onChange={(event: any) => setMessage(event.target.value)}/>
      <Button onClick={handleSubmitMessage}>Submit</Button>
    </div>
  );
};

export default SendMessageTemplate;