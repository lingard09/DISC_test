import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Auth.module.css";
import { ROUTES, TRACKS } from "../constants";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

export default function NameInputPage() {
  const [name, setName] = useState("");
  const [track, setTrack] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!track) {
      alert("트랙을 선택해주세요.");
      return;
    }

    // 이름과 트랙을 localStorage에 저장
    localStorage.setItem("userName", name);
    localStorage.setItem("userTrack", track);

    // DISC 테스트 페이지로 이동
    navigate(ROUTES.TEST);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1 className={styles.title}>정보를 입력해주세요</h1>

        <div className={styles.inputGroup}>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className={styles.inputGroup}>
          <select value={track} onChange={(e) => setTrack(e.target.value)}>
            <option value="">트랙을 선택하세요</option>
            {TRACKS.map((trackOption) => (
              <option key={trackOption} value={trackOption}>
                {trackOption}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.cbox}>
          <Button onClick={handleSubmit}>시작하기</Button>
        </div>
      </div>
    </div>
  );
}
