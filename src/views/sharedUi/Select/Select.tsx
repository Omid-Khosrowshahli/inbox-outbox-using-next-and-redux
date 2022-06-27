import { createElement, FC, ReactNode, SelectHTMLAttributes } from "react";
import styles from './Select.module.css';

interface ISelectProps extends SelectHTMLAttributes<Element> {
  children: ReactNode[]
}

const Select: FC<ISelectProps> = (props) => {
  const { children, className='', ...otherProps } = props;

  return (
    createElement("select", {
      className: `${styles.selectElement} ${className}`,
      ...otherProps
    }, children)
  );
};

export default Select;