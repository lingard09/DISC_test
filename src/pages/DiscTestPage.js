import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDiscTest } from "../hooks/useDiscTest";
import { DISC_QUESTIONS, DISC_COLORS } from "../constants";
import TestQuestion from "../components/disc/TestQuestion";
import LoadingSpinner from "../components/common/LoadingSpinner";

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  z-index: 1000;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transition: width 0.3s ease;
  width: ${(props) => props.$progress}%;
`;

function DiscTestPage() {
  const navigate = useNavigate();
  const {
    currentQuestionIndex,
    isLoading,
    handleOptionClick,
    handleBackClick,
  } = useDiscTest((resultRoute) => {
    navigate(resultRoute);
  });

  const currentQuestion = DISC_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / DISC_QUESTIONS.length) * 100;

  if (isLoading) {
    return <LoadingSpinner message="결과를 분석하고 있습니다..." />;
  }

  if (!currentQuestion) {
    return null;
  }

  return (
    <>
      <ProgressBarContainer>
        <ProgressBarFill $progress={progress} />
      </ProgressBarContainer>
      <TestQuestion
        question="자신과 가장 잘 맞는 키워드를 골라주세요!"
        options={currentQuestion}
        colors={DISC_COLORS}
        onOptionClick={handleOptionClick}
        onBackClick={currentQuestionIndex > 0 ? handleBackClick : null}
      />
    </>
  );
}

export default DiscTestPage;
