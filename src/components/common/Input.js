import React from "react";
import styles from "../../styles/Common.module.css";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`${styles.input} ${className}`}
      {...props}
    />
  );
};

export default Input;
