import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authServiceSupabase as authService } from "../services/apiSupabase";
import { storageService } from "../services/api";
import { ROUTES } from "../constants";

// 로그인 로직을 처리하는 커스텀 훅
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (name, password, redirectPath = ROUTES.TEST) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.login(name, password);
      storageService.setMemberID(response.memberID);
      navigate(redirectPath);
      return response;
    } catch (err) {
      console.error("로그인 실패:", err);
      setError("아이디 또는 비밀번호가 일치하지 않습니다.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
