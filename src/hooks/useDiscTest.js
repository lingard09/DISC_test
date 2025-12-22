import { useState, useEffect } from "react";
import {
  findMaxIndex,
  updateDiscScore,
  getDiscRoute,
} from "../utils/discUtils";
import { DISC_QUESTIONS } from "../constants";

export const useDiscTest = (onComplete) => {
  const [scores, setScores] = useState([100, 100, 100, 100]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const index = findMaxIndex(scores);
    setMaxIndex(index);
  }, [scores]);

  const handleOptionClick = (optionIndex) => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setScores((prev) => updateDiscScore(prev, optionIndex));
  };

  const handleBackClick = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  useEffect(() => {
    if (currentQuestionIndex === DISC_QUESTIONS.length) {
      const resultRoute = getDiscRoute(maxIndex);
      onComplete(resultRoute);
    }
  }, [currentQuestionIndex, maxIndex, onComplete]);

  return {
    scores,
    currentQuestionIndex,
    maxIndex,
    handleOptionClick,
    handleBackClick,
  };
};
