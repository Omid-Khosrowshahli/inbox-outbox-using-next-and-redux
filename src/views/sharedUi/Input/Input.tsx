import { createElement, FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface IInputProps extends InputHTMLAttributes<Element> {
}

const Input: FC<IInputProps> = (props) => {
  const { className='', type='text', ...otherProps } = props;

  return (
    createElement("input", {
      className: `${styles.inputElement} ${className}`,
      type,
      ...otherProps
    })
  );
}

export default Input;