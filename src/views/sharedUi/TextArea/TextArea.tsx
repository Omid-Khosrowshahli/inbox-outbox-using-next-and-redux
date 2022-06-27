import { createElement, FC, TextareaHTMLAttributes } from "react";
import styles from './TextArea.module.css';

interface ITextAreaProps extends TextareaHTMLAttributes<Element> {
  
};

const TextArea: FC<ITextAreaProps> = (props) => {
  const { className='', ...otherProps } = props;
  return(
    createElement("textarea", {
      className: `${styles.textElement} ${className}`,
      ...otherProps
    })
  );
};

export default TextArea;