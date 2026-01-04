import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 18px;
  background-color: #f9f9f9;
  transition: all 0.3s;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 12px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 14px;
  }
`;

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
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      {...props}
    />
  );
};

export default Input;
