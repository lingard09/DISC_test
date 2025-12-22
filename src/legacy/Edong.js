import React, { useState } from "react";
import styles from "./Edong.module.css";
import { useSignup } from "./hooks/useSignup";
import { TRACKS, TRACK_PLACEHOLDER } from "./constants/tracks";
import { validateSignupForm } from "./utils/validation";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedTrack, setSelectedTrack] = useState("");
  const { signup, loading } = useSignup();

  const handleSubmit = async () => {
    // 유효성 검사
    const validation = validateSignupForm(userName, selectedTrack, password);
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      await signup(userName, selectedTrack, password);
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h2>회원 정보 입력</h2>
        <div className={styles.font}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="이름 입력"
            disabled={loading}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호 입력"
            disabled={loading}
          />
          <select
            onChange={(e) => setSelectedTrack(e.target.value)}
            value={selectedTrack}
            disabled={loading}
          >
            <option value="">{TRACK_PLACEHOLDER}</option>
            {TRACKS.map((track) => (
              <option value={track} key={track}>
                {track}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.cbox}>
          <button
            className={styles.edongbtn}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "처리 중..." : "확인"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
