import { useState, useEffect } from "react";
import {
  findMaxIndex,
  updateDiscScore,
  getDiscRoute,
} from "../utils/discUtils";
import { DISC_QUESTIONS, DISC_TYPES } from "../constants";
import { authServiceSupabase } from "../services/apiSupabase";
import { storageService } from "../services/api";

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
      const saveResultAndNavigate = async () => {
        try {
          const memberID = storageService.getMemberID();

          if (memberID) {
            // DISC 점수 객체 생성
            const discScores = {
              d: scores[0],
              i: scores[1],
              s: scores[2],
              c: scores[3],
            };

            // 결과 타입 결정 (D, I, S, C)
            const resultType = ["D", "I", "S", "C"][maxIndex];

            // Supabase에 결과 저장
            await authServiceSupabase.saveDiscResult(
              memberID,
              discScores,
              resultType
            );

            console.log("✅ DISC 결과 저장 완료:", {
              memberID,
              scores: discScores,
              resultType,
            });
          }
        } catch (error) {
          console.error("❌ DISC 결과 저장 실패:", error);
        } finally {
          // 저장 성공 여부와 관계없이 결과 페이지로 이동
          const resultRoute = getDiscRoute(maxIndex);
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
    handleOptionClick,
    handleBackClick,
  };
};
