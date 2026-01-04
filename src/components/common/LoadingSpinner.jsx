import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.$fullScreen ? "100vh" : "400px")};
  width: 100%;
  background-color: ${(props) =>
    props.$fullScreen ? "rgba(255, 255, 255, 0.95)" : "transparent"};
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #4caf50;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

const Message = styled.p`
  color: #333;
  font-size: 16px;
  margin: 0;
`;

const LoadingSpinner = ({ message = "로딩 중...", fullScreen = false }) => {
  return (
    <LoadingContainer $fullScreen={fullScreen}>
      <Spinner />
      <Message>{message}</Message>
    </LoadingContainer>
  );
};

export default LoadingSpinner;
