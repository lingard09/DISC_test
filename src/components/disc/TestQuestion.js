import React from "react";
import styled from "styled-components";
import { darkenColor } from "../../utils/colorUtils";

const QuestionContainer = styled.div`
  padding: 20px;
`;

const QuestionTitle = styled.h1`
  text-align: center;
  font-family: "Jua", serif;
  margin-top: 70px;
  font-size: 50px;
  color: black;
  font-weight: 100;
`;

const OptionButton = styled.button`
  background-color: ${(props) => props.backColor};
  display: block;
  margin: 30px auto 0;
  font-family: "Jua", serif;
  height: 100px;
  width: 550px;
  font-size: 30px;
  text-shadow: 1px 1px 2px white;
  color: black;
  border-width: 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => darkenColor(props.backColor, 20)};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${(props) => darkenColor(props.backColor, 40)};
    transform: scale(0.95);
  }
`;

const BackButton = styled.button`
  display: block;
  margin: 10px auto 0;
  margin-left: 50px;
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
          backColor={colors[index]}
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
