import React from "react";
import styled from "styled-components";
import { darkenColor } from "../../utils/colorUtils";

const QuestionContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const QuestionTitle = styled.h1`
  text-align: center;
  font-family: "Jua", serif;
  margin-top: 70px;
  font-size: 50px;
  color: black;
  font-weight: 100;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    margin-top: 30px;
    padding: 0 15px;
  }
`;

const OptionButton = styled.button`
  background-color: ${(props) => props.$backgroundColor};
  display: block;
  margin: 30px auto 0;
  font-family: "Jua", serif;
  height: 100px;
  width: 100%;
  max-width: 550px;
  font-size: 30px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => darkenColor(props.$backgroundColor, 20)};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${(props) => darkenColor(props.$backgroundColor, 40)};
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    height: 90px;
    font-size: 26px;
    margin: 25px auto 0;
  }

  @media (max-width: 480px) {
    height: 80px;
    font-size: 22px;
    margin: 20px auto 0;
    border-radius: 10px;
    width: 95%;
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 20px auto 0;
  font-family: "Jua", serif;
  height: 70px;
  width: 100px;
  font-size: 30px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 10px;
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
    height: 65px;
    width: 95px;
    font-size: 26px;
  }

  @media (max-width: 480px) {
    height: 60px;
    width: 90px;
    font-size: 24px;
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

      {onBackClick && <BackButton onClick={onBackClick}>Back</BackButton>}
    </QuestionContainer>
  );
};

export default TestQuestion;
