import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
import { useSignup } from "../hooks";
import { TRACKS, TRACK_PLACEHOLDER } from "../constants";
import { validateSignupForm } from "../utils/validation";
import Button from "../components/common/Button";
import Input from "../components/common/Input";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    selectedTrack: "",
  });
  const { signup, loading } = useSignup();

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { userName, password, selectedTrack } = formData;

    const validation = validateSignupForm(userName, selectedTrack, password);
    if (!validation.isValid) {
      alert(validation.message);
      return;
    }

    try {
      await signup(userName, selectedTrack, password);
    } catch (error) {
      // 서버 에러 메시지가 있으면 표시
      const errorMsg =
        error.response?.data?.message ||
        "회원가입에 실패했습니다. 다시 시도해주세요.";
      alert(errorMsg);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h2>회원 정보 입력</h2>
        <div className={styles.font}>
          <Input
            type="text"
            value={formData.userName}
            onChange={handleChange("userName")}
            placeholder="이름 입력"
            disabled={loading}
          />
          <Input
            type="password"
            value={formData.password}
            onChange={handleChange("password")}
            placeholder="비밀번호 입력"
            disabled={loading}
          />
          <select
            onChange={handleChange("selectedTrack")}
            value={formData.selectedTrack}
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
          <Button onClick={handleSubmit} disabled={loading} loading={loading}>
            {loading ? "처리 중..." : "확인"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
