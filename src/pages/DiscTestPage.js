import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiscTest } from "../hooks/useDiscTest";
import { DISC_QUESTIONS, DISC_COLORS } from "../constants";
import TestQuestion from "../components/disc/TestQuestion";

function DiscTestPage() {
  const navigate = useNavigate();
  const { currentQuestionIndex, handleOptionClick, handleBackClick } =
    useDiscTest((resultRoute) => {
      navigate(resultRoute);
    });

  const currentQuestion = DISC_QUESTIONS[currentQuestionIndex];

  if (!currentQuestion) {
    return null;
  }

  return (
    <TestQuestion
      question="자신과 가장 잘 맞는 키워드를 골라주세요!"
      options={currentQuestion}
      colors={DISC_COLORS}
      onOptionClick={handleOptionClick}
      onBackClick={currentQuestionIndex > 0 ? handleBackClick : null}
    />
  );
}

export default DiscTestPage;
