import { ButtonHTMLAttributes, createElement, FC, ReactNode } from "react";
import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<Element> {
  children: ReactNode
}

const Button: FC<IButtonProps> = (props) => {
  const { children, className='', ...otherProps } = props;

  return (
    createElement("button", {
      className: `${styles.buttonElement} ${className}`,
      ...otherProps
    }, children)
  );
}

export default Button;