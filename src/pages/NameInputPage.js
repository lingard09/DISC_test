import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Auth.module.css";
import { ROUTES } from "../constants";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

export default function NameInputPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("이름을 입력해주세요.");
      return;
    }

    // 이름을 localStorage에 저장
    localStorage.setItem("userName", name);
    
    // DISC 테스트 페이지로 이동
    navigate(ROUTES.TEST);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>이름을 입력해주세요</h1>
        
        <div className={styles.inputGroup}>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <Button onClick={handleSubmit}>시작하기</Button>
      </div>
    </div>
  );
}
