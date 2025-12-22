import { useState, useEffect } from "react";
import { authServiceSupabase as authService } from "../services/apiSupabase";
import { storageService } from "../services/api";

// 사용자 정보를 가져오는 커스텀 훅
export const useUserInfo = () => {
  const [userName, setUserName] = useState("");
  const [userTrack, setUserTrack] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const memberID = storageService.getMemberID();

      if (!memberID) {
        setLoading(false);
        setError("로그인이 필요합니다.");
        return;
      }

      try {
        const userData = await authService.getUserInfo(memberID);
        setUserName(userData.name);
        setUserTrack(userData.track);
      } catch (err) {
        console.error("사용자 정보 조회 실패:", err);
        setError("사용자 정보를 불러올 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { userName, userTrack, loading, error };
};
