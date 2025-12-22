import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  background-color: ${(props) =>
    props.$variant === "primary" ? "#4caf50" : "#6c757d"};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.$variant === "primary" ? "#45a049" : "#5a6268"};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <StyledButton
      $variant={variant}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      {...props}
    >
      {loading ? "처리 중..." : children}
    </StyledButton>
  );
};

export default Button;
