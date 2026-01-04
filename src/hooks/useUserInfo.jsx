import { useState, useEffect } from "react";

// 사용자 정보를 가져오는 커스텀 훅 (localStorage 기반)
export const useUserInfo = () => {
  const [userName, setUserName] = useState("");
  const [userTrack, setUserTrack] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = () => {
      const name = localStorage.getItem("userName");
      const track = localStorage.getItem("userTrack");

      if (!name) {
        setError("이름이 없습니다.");
      } else {
        setUserName(name);
        setUserTrack(track || "");
      }

      setLoading(false);
    };

    fetchUserInfo();
  }, []);

  return { userName, userTrack, loading, error };
};
