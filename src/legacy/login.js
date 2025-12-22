import React, { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "./hooks/useLogin";
import { validateLoginForm } from "./utils/validation";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();

  const handleSubmit = async () => {
    // 유효성 검사
    const validation = validateLoginForm(userName, password);
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      await login(userName, password);
    } catch (err) {
      // 에러는 useLogin 훅에서 처리됨
    }
  };

  // Enter 키 처리
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h2>회원 로그인 ฅ՞ ❛‿˂̵ ՞ ✧*｡</h2>
        <div className={styles.font}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="이름 입력"
            disabled={loading}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="비밀번호 입력"
            disabled={loading}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.cbox}>
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "로그인 중..." : "확인"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
