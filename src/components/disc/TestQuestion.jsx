import React from "react";
import styled from "styled-components";
import { darkenColor } from "../../utils/colorUtils.jsx";

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  height: 100vh;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    padding-top: 20%;
  }
`;

const QuestionTitle = styled.h1`
  text-align: center;
  margin-top: 70px;
  font-size: 56px;
  color: black;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 38px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 30px;
    padding: 0 10px;
    word-break: keep-all;
    line-height: 1.4;
  }
`;

const OptionButton = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  display: block;
  margin: 30px auto 0;
  height: 110px;
  width: 100%;
  max-width: 600px;
  font-size: 34px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 12px;
  border-style: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => darkenColor(props.$backgroundColor, 10)};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${(props) => darkenColor(props.$backgroundColor, 20)};
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 100px;
    font-size: 30px;
    margin: 28px auto 0;
  }

  @media (max-width: 480px) {
    height: 70px;
    font-size: 24px;
    margin: 20px auto 0;
    border-radius: 12px;
    width: 60%;
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 100px auto 0;
  padding: 10px 20px;
  height: 75px;
  width: 200px;
  font-size: 32px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: gray;
    transform: scale(1.1);
  }

  &:active {
    background-color: darkgray;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 70px;
    width: 105px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    height: 60px;
    width: 100px;
    padding: 8px 16px;
    font-size: 18px;
  }
`;

const TestQuestion = ({
  question,
  options,
  colors,
  onOptionClick,
  onBackClick,
}) => {
  return (
    <QuestionContainer>
      <QuestionTitle>{question}</QuestionTitle>

      {options.map((option, index) => (
        <OptionButton
          key={index}
          $backgroundColor={colors[index]}
          onClick={() => onOptionClick(index)}
        >
          {option}
        </OptionButton>
      ))}

      {onBackClick && <BackButton onClick={onBackClick}>이전 문제</BackButton>}
    </QuestionContainer>
  );
};

export default TestQuestion;
