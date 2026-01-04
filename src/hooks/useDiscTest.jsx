import { useState, useEffect, useRef } from "react";
import {
  findMaxIndex,
  updateDiscScore,
  getDiscRoute,
} from "../utils/discUtils.jsx";
import { DISC_QUESTIONS } from "../constants/index.jsx";
import { authServiceSupabase } from "../services/apiSupabase.jsx";

export const useDiscTest = (onComplete) => {
  const [scores, setScores] = useState([100, 100, 100, 100]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const hasSaved = useRef(false); // 중복 저장 방지

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
    if (currentQuestionIndex === DISC_QUESTIONS.length && !hasSaved.current) {
      hasSaved.current = true; // 중복 실행 방지

      const saveResultAndNavigate = async () => {
        setIsLoading(true);
        try {
          const userName = localStorage.getItem("userName");
          const userTrack = localStorage.getItem("userTrack");

          if (userName) {
            // DISC 점수 객체 생성
            const discScores = {
              d: scores[0],
              i: scores[1],
              s: scores[2],
              c: scores[3],
            };

            // 결과 타입 결정 (D, I, S, C)
            const resultType = ["D", "I", "S", "C"][maxIndex];

            // Supabase에 간단한 결과 저장 (이름과 트랙 함께)
            await authServiceSupabase.saveSimpleDiscResult(
              userName,
              userTrack,
              discScores,
              resultType
            );
          }
        } catch (error) {
          // 에러 발생 시 무시하고 결과 페이지로 이동
        } finally {
          // 저장 성공 여부와 관계없이 결과 페이지로 이동
          const resultRoute = getDiscRoute(maxIndex);
          setIsLoading(false);
          onComplete(resultRoute);
        }
      };

      saveResultAndNavigate();
    }
  }, [currentQuestionIndex, maxIndex, scores, onComplete]);

  return {
    scores,
    currentQuestionIndex,
    maxIndex,
    isLoading,
    handleOptionClick,
    handleBackClick,
  };
};
