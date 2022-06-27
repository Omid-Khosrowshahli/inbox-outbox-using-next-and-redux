import { Modal } from "antd";
import { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setIsModalVisible } from "../../../Redux/modalSlice";

interface IModalProps {
  isModalVisible: boolean,
  children: ReactNode
}

const infoModal: FC<IModalProps> = (props) => {
  const { isModalVisible, children } = props;

  const dispatch = useDispatch();

  const handleOk = (): void => {
    dispatch(setIsModalVisible(false));
  }

  const handleCancel = (): void => {
    dispatch(setIsModalVisible(false));
  }
  return (
    <Modal title="Info" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {children}    
    </Modal>
  );
};

export default infoModal;