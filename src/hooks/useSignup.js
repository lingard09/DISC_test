import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/api";
import { ROUTES } from "../constants";

// 회원가입 로직을 처리하는 커스텀 훅
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signup = async (name, track, password, redirectPath = ROUTES.LOGIN) => {
    setLoading(true);
    setError(null);

    // 전송 데이터 로그
    console.log("📤 회원가입 요청 데이터:", { name, track, password: "***" });

    try {
      const response = await authService.signUp(name, track, password);
      console.log("✅ 회원가입 성공:", response);
      navigate(redirectPath, { state: { userName: name, job: track } });
      return response;
    } catch (err) {
      console.error("❌ 회원가입 실패:", err);
      console.error("❌ 에러 응답:", err.response?.data);
      console.error("❌ 에러 상태:", err.response?.status);

      const errorMessage =
        err.response?.data?.message ||
        "회원가입에 실패했습니다. 다시 시도해주세요.";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
