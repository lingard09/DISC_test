import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DISC_QUESTIONS, DISC_COLORS } from "../constants/discTypes";
import { darkenColor } from "../utils/colorUtils";
import {
  findMaxIndex,
  updateDiscScore,
  getDiscRoute,
} from "../utils/discUtils";

// 스타일링된 컴포넌트
const Button = styled.button`
  background-color: ${(props) => props.backColor};
  display: block;
  margin: 0 auto;
  font-family: "Jua", serif;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
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

const Question = styled.h1`
  text-align: center;
  font-family: "Jua", serif;
  margin-top: ${(props) => props.marginTop};
  font-size: 50px;
  color: black;
  font-weight: 100;
`;

const ArrowButton = styled.button`
  display: block;
  margin: 0 auto;
  font-family: "Jua", serif;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
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

const Container = styled.div`
  padding: 20px;
`;

function DiscTest() {
  const [scores, setScores] = useState([100, 100, 100, 100]); // D, I, S, C 점수
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const navigate = useNavigate();

  // 최댓값 인덱스 계산
  useEffect(() => {
    const index = findMaxIndex(scores);
    setMaxIndex(index);
  }, [scores]);

  // 옵션 선택 핸들러
  const handleOptionClick = (optionIndex) => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setScores((prev) => updateDiscScore(prev, optionIndex));
  };

  // 이전 질문으로 돌아가기
  const handleBackClick = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
  };

  // 테스트 완료 시 결과 페이지로 이동
  useEffect(() => {
    if (currentQuestionIndex === DISC_QUESTIONS.length) {
      const resultRoute = getDiscRoute(maxIndex);
      navigate(resultRoute);
    }
  }, [currentQuestionIndex, maxIndex, navigate]);

  // 현재 질문
  const currentQuestion = DISC_QUESTIONS[currentQuestionIndex];

  return (
    <Container>
      <Question marginTop="70px">
        자신과 가장 잘 맞는 키워드를 골라주세요!
      </Question>

      {currentQuestion &&
        currentQuestion.map((option, index) => (
          <Button
            key={index}
            marginBottom="30px"
            backColor={DISC_COLORS[index]}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </Button>
        ))}

      {currentQuestionIndex > 0 && (
        <ArrowButton
          onClick={handleBackClick}
          marginTop="10px"
          marginLeft="50px"
        >
          Back
        </ArrowButton>
      )}
    </Container>
  );
}

export default DiscTest;
