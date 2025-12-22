import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
import { useLogin } from "../hooks";
import { validateLoginForm } from "../utils/validation";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

function LoginPage() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const { login, loading, error } = useLogin();

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { userName, password } = formData;

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
          <Input
            type="text"
            value={formData.userName}
            onChange={handleChange("userName")}
            onKeyPress={handleKeyPress}
            placeholder="이름 입력"
            disabled={loading}
          />
          <Input
            type="password"
            value={formData.password}
            onChange={handleChange("password")}
            onKeyPress={handleKeyPress}
            placeholder="비밀번호 입력"
            disabled={loading}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.cbox}>
          <Button onClick={handleSubmit} disabled={loading} loading={loading}>
            {loading ? "로그인 중..." : "확인"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
