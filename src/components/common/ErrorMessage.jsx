import React from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 20px;
`;

const ErrorText = styled.p`
  color: #d32f2f;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const RetryButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <ErrorContainer>
      <ErrorText>{message}</ErrorText>
      {onRetry && <RetryButton onClick={onRetry}>다시 시도</RetryButton>}
    </ErrorContainer>
  );
};

export default ErrorMessage;
